import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const shabnam = localFont({
  src: [
    {
      path: "./fonts/shabnam/Shabnam-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/shabnam/Shabnam-Bold-FD.woff2",
      weight: "600",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "فعالیت‌های من",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${shabnam.className}`}>{children}</body>
    </html>
  );
}
