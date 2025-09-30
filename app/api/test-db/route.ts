import { connectToDatabase } from "@/database/mongoose";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    console.log("🔄 Testing database connection...");

    // Test the connection
    await connectToDatabase();

    // Get connection info
    const connection = mongoose.connection;
    const collections = connection.db
      ? await connection.db.listCollections().toArray()
      : [];

    return NextResponse.json({
      success: true,
      message: "Database connection successful!",
      details: {
        host: connection.host,
        database: connection.name,
        readyState: connection.readyState,
        readyStateText:
          connection.readyState === 1 ? "Connected" : "Not Connected",
        collections: collections.map((c) => c.name),
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("❌ Database connection error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
