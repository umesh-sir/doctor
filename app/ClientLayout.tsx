'use client'
import { usePathname } from "next/navigation";
import Header from "./atom/header"; // Default Header
import Footer from "./atom/footer";   // Default Footer
import HospitalHeader from "./atom/hospitalheader";
import HospitalFooter from "./atom/hospitalfooter";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const isLoginPage = pathname === "/login"; // Check if current path is "/login"
  const isHospitalPage = pathname.startsWith("/hospital"); // Check if path starts with "/hospital"

  return (
    <>
      {/* Render the appropriate header based on the current page */}
      {!isLoginPage && !isHospitalPage && <Header />}
      {isHospitalPage && <HospitalHeader />}

      {/* Render the main content */}
      {children}

      {/* Render the appropriate footer based on the current page */}
      {isHospitalPage && <HospitalFooter />}
      {!isLoginPage && !isHospitalPage && <Footer />}
    </>
  );
};

export default ClientLayout;
