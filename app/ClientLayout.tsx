"use client";

import { usePathname } from "next/navigation"; // Use usePathname instead
import Header from "./atom/header";
import Footer from "./atom/footer";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current pathname
  const isLoginPage = pathname === "/login"; // Check if current path is "/login"

  return (
    <>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
};

export default ClientLayout;
