import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-2 header">
      <div className="container header-wrapper">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="Stacklet Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        {/* Navigation - Placeholder for future links */}

        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        {/* User Dropdown */}
        <UserDropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
