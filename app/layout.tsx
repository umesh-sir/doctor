import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./atom/header";
import Footer from "./atom/footer";
import Header from "./atom/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hospital.com",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <Header ></Header>
        {children}</body>
        <Footer></Footer>
    </html>
  );
}
