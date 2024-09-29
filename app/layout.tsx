import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import menuList from "@/data/menu.json";
const fontPrimary = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-primary",
  weight: "100 400 900",
});
const fontSecondary = localFont({
  src: "./fonts/Classyvogueregular.ttf",
  variable: "--font-secondary",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Nandivardhan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased`}
      >
        <Header menuList={menuList} />
        {children}
      </body>
    </html>
  );
}
