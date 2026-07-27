import type { Metadata } from "next";
import { ppNeueBit, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul — Portfolio",
  description: "I'm a [designer], [researcher], and [artist], who makes things for people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ppNeueBit.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
