import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import menuList from "@/data/menu.json";
import { Loader } from "@/components/loader";
import { ContactUs } from "@/components/contact-popup";
import { Footer } from "@/components/footer";
import { Cursor } from "@/components/cursor";
const fontPrimary = localFont({
  src: "./fonts/Futura-Std-Book.otf",
  variable: "--font-primary",
  weight: "100 400 900",
});
const fontSecondary = localFont({
  src: "./fonts/Chronicle-Display-Roman.otf",
  variable: "--font-secondary",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Nandivardhan",
  description: "Nandivardhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased overflow-x-hidden`}
      >
        <Cursor />
        <Loader />
        <Header menuList={menuList} />
        {children}
        <Footer />
        <ContactUs />
      </body>
    </html>
  );
}
