'use client'
import { usePathname } from "next/navigation";
import Header from "./components/header";
import HospitalHeader from "./components/hospitalheader";
import Footer from "./components/footer";
 

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  const isLoginPage = pathname === "/login"; // Check if current path is "/login"
  const isHospitalPage = pathname.startsWith("/hospital");
  const isPatientviewPage = pathname.startsWith("/ramdeva/patientview");
  return (
    <>
      {/* Render the appropriate header based on the current page */}
      {!isLoginPage && !isHospitalPage  && !isPatientviewPage && <Header />}
      {isHospitalPage && <HospitalHeader />}

      {/* Render the main content */}
      {children}

      {/* Render the appropriate footer based on the current page */}
      {isHospitalPage && <Footer/>}
      {!isLoginPage && !isHospitalPage && !isPatientviewPage && <Footer/>}
    </>
  );
};

export default ClientLayout;
