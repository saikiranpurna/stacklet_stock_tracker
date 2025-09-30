import Header from "@/components/Header";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  const userSession = await auth.api.getSession({
    headers: await headers(),
  });
  if (!userSession?.user) {
    redirect("/sign-up");
  }
  const user = {
    id: userSession.user.id,
    email: userSession.user.email,
    name: userSession.user.name,
  };
  return (
    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default Layout;
