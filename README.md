# 📈 Stock Market Tracker

A modern, full-stack stock market tracking application built with Next.js 15, featuring real-time market data, user authentication, personalized onboarding, and comprehensive market analysis tools.

## ✨ Features

### 🏠 Dashboard & Market Data

- **Real-time Market Overview**: Live market data powered by TradingView widgets
- **Interactive Stock Heatmap**: Visual representation of market performance
- **Market News & Timeline**: Latest financial news and market updates
- **Live Market Quotes**: Real-time stock prices and market data
- **Responsive Design**: Optimized for desktop and mobile devices

### 🔐 Authentication & User Management

- **Email/Password Authentication**: Secure user registration and login
- **Better Auth Integration**: Modern authentication system with MongoDB adapter
- **Form Validation**: Client-side validation with react-hook-form
- **User Session Management**: Persistent user sessions with secure cookies
- **Protected Routes**: Role-based access control

### 📧 Personalized Onboarding

- **AI-Powered Welcome Emails**: Personalized welcome messages using Gemini AI
- **User Profile Collection**: Investment goals, risk tolerance, and industry preferences
- **Country Selection**: International user support with country-specific features
- **Email Automation**: Automated email workflows with Inngest and Nodemailer

### 🛠️ Developer Experience

- **TypeScript**: Full type safety across the application
- **Modern UI Components**: Radix UI primitives with custom styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Dark Mode**: Native dark mode support throughout the application
- **Toast Notifications**: User feedback with Sonner toast notifications

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Notifications**: Sonner
- **Icons**: Lucide React

### Backend & Database

- **Runtime**: Node.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Authentication**: Better Auth
- **Email Service**: Nodemailer (Gmail)
- **Background Jobs**: Inngest
- **AI Integration**: Google Gemini AI

### DevOps & Tooling

- **Build Tool**: Turbopack
- **Linting**: ESLint
- **Type Checking**: TypeScript
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account or local MongoDB instance
- Gmail account for email services (optional)
- Inngest account for background jobs (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/saikiranpurna/stacklet_stock_tracker.git
   cd stock-market-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

   # Authentication
   BETTER_AUTH_SECRET=your-secret-key
   BETTER_AUTH_URL=http://localhost:3000

   # Email Configuration (Optional)
   NODEMAILER_EMAIL=your-gmail@gmail.com
   NODEMAILER_PASSWORD=your-app-password

   # Inngest (Optional)
   INNGEST_EVENT_KEY=your-inngest-key
   INNGEST_SIGNING_KEY=your-signing-key

   # App Configuration
   NODE_ENV=development
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Database Connection Test**

   ```bash
   npm run test:db
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

6. **Open Application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
stock-market-app/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/              # Sign in page
│   │   └── sign-up/              # Sign up page
│   ├── (root)/                   # Main application routes
│   │   └── page.tsx              # Dashboard homepage
│   ├── api/                      # API routes
│   │   ├── inngest/              # Inngest webhook handler
│   │   └── test-db/              # Database connection test
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── forms/                    # Form components
│   │   ├── CountrySelectField.tsx
│   │   ├── FooterLink.tsx
│   │   ├── InputField.tsx
│   │   └── SelectField.tsx
│   ├── ui/                       # UI components (Radix UI)
│   ├── Header.tsx                # Application header
│   ├── NavItems.tsx              # Navigation items
│   ├── TradingViewWidget.tsx     # TradingView widget wrapper
│   └── UserDropdown.tsx          # User menu dropdown
├── database/                     # Database configuration
│   └── mongoose.ts               # MongoDB connection setup
├── hooks/                        # Custom React hooks
│   └── useTradingViewWidget.tsx  # TradingView widget hook
├── lib/                          # Utility libraries
│   ├── actions/                  # Server actions
│   │   └── auth.actions.ts       # Authentication actions
│   ├── better-auth/              # Authentication setup
│   │   └── auth.ts               # Better Auth configuration
│   ├── inngest/                  # Background job functions
│   │   ├── client.ts             # Inngest client
│   │   ├── functions.ts          # Job functions
│   │   └── prompts.ts            # AI prompts
│   ├── nodemailer/               # Email service
│   │   ├── index.ts              # Email sender
│   │   └── templates.ts          # Email templates
│   ├── constants.ts              # Application constants
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
│   └── assets/                   # Images and icons
├── scripts/                      # Utility scripts
│   └── test-db-connection.ts     # Database connection test
├── types/                        # TypeScript type definitions
│   └── global.d.ts               # Global type declarations
└── README.md                     # Project documentation
```

## 🧪 Testing

### Database Connection Test

```bash
npm run test:db
```

### API Endpoint Test

Visit `http://localhost:3000/api/test-db` to test database connectivity through the API.

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test:db` - Test database connection

## 🔧 Configuration

### TradingView Widgets

The application uses multiple TradingView widgets configured in `lib/constants.ts`:

- Market Overview
- Stock Heatmap
- Top Stories Timeline
- Market Data Quotes

### Authentication Flow

1. User registers with email, password, and investment preferences
2. Better Auth handles secure authentication with MongoDB
3. Background job triggers personalized welcome email
4. User is redirected to dashboard with authenticated session

### Email Templates

Personalized welcome emails are generated using AI and include:

- User's investment goals and preferences
- Risk tolerance recommendations
- Industry-specific market insights

## 🚀 Deployment

### Environment Variables

Ensure all required environment variables are set in your deployment platform:

- Database connection string
- Authentication secrets
- Email service credentials
- Inngest configuration

### Database Setup

1. Create MongoDB Atlas cluster
2. Configure network access and database user
3. Update connection string in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TradingView](https://www.tradingview.com/) for market data widgets
- [Better Auth](https://better-auth.com/) for authentication system
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Inngest](https://www.inngest.com/) for background job processing
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting

## 📞 Support

For support, email [your-email@example.com] or open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
