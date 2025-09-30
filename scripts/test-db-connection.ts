import mongoose from "mongoose";
import { config } from "dotenv";

// Load environment variables
config({ path: ".env.local" });

async function testDatabaseConnection(): Promise<void> {
  console.log("🔄 Testing database connection...");

  // Debug: Check if environment variable is loaded
  console.log("🔍 MONGODB_URI exists:", !!process.env.MONGODB_URI);
  console.log(
    "🔍 Environment variables loaded:",
    Object.keys(process.env).filter((key) => key.includes("MONGODB"))
  );

  try {
    // Test the connection directly
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI, { bufferCommands: false });

    // Get connection details
    const connection = mongoose.connection;
    console.log("✅ Database connection successful!");
    console.log(`📍 Host: ${connection.host}`);
    console.log(`🗄️  Database: ${connection.name}`);
    console.log(
      `🔌 Ready State: ${
        connection.readyState === 1 ? "Connected" : "Not Connected"
      }`
    );

    // Test listing collections
    if (connection.db) {
      const collections = await connection.db.listCollections().toArray();
      console.log(`📋 Collections found: ${collections.length}`);

      if (collections.length > 0) {
        console.log(
          "📑 Collection names:",
          collections.map((c) => c.name).join(", ")
        );
      } else {
        console.log(
          "📭 No collections found (this is normal for a new database)"
        );
      }
    }

    // Test creating a simple document
    const TestSchema = new mongoose.Schema({
      message: String,
      timestamp: { type: Date, default: Date.now },
    });

    const TestModel =
      mongoose.models.ConnectionTest ||
      mongoose.model("ConnectionTest", TestSchema);

    const testDoc = new TestModel({
      message: "Database connection test successful!",
    });

    await testDoc.save();
    console.log("✅ Test document created successfully!");

    // Verify the document was saved
    const savedDoc = await TestModel.findById(testDoc._id);
    console.log("✅ Test document retrieved:", savedDoc?.message);

    // Clean up the test document
    await TestModel.deleteOne({ _id: testDoc._id });
    console.log("🧹 Test document cleaned up");

    console.log("🎉 All database tests passed!");
  } catch (error) {
    console.error("❌ Database connection failed:");
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(errorMessage);

    // Provide helpful error messages
    if (errorMessage.includes("MONGODB_URI is not defined")) {
      console.log(
        "\n💡 Solution: Make sure you have a .env.local file with MONGODB_URI defined"
      );
    } else if (errorMessage.includes("ECONNREFUSED")) {
      console.log("\n💡 Solutions:");
      console.log(
        "   - For local MongoDB: Make sure MongoDB service is running"
      );
      console.log(
        "   - For MongoDB Atlas: Check your connection string and network access"
      );
    } else if (errorMessage.includes("authentication failed")) {
      console.log(
        "\n💡 Solution: Check your MongoDB username and password in the connection string"
      );
    } else if (errorMessage.includes("getaddrinfo ENOTFOUND")) {
      console.log(
        "\n💡 Solution: Check your internet connection and MongoDB host address"
      );
    }

    process.exit(1);
  } finally {
    // Close the connection
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log("🔌 Database connection closed");
    }
  }
}

// Run the test
testDatabaseConnection()
  .then(() => {
    console.log("✨ Test completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Test failed:", error);
    process.exit(1);
  });
