import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QM Technologies",
  description:
    "Building software applications that will profit Nigeria and its economy, with a vision to extend these benefits across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-primary-50">
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
