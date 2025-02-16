import type { Metadata } from "next";
import "./globals.css";
import Banner from "../components/Header/Banner";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Plan B Burger Food",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth! scroll-auto">
      <body>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
