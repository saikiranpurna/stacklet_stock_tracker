import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link href="/" className="auth-logo">
          <Image
            src="/assets/icons/logo.svg"
            alt="Stacklet Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>
      <section className="auth-right-sec">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            Stacklet turned my watchlist into a goldmine. The TradingView
            widgets are a game-changer for my trading strategy.
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Purna Junior.</cite>
              <p className="mx-md:text-xs text-gray-500">Trader</p>
            </div>
          </div>
          <div className="flex items-center gap-.5">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <span key={index} className="text-yellow-500 text-lg">
                ★
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-400">
              Rated 5 Stars on Trustpilot
            </span>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/images/dashboard.png"
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default Layout;
