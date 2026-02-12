import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marion's Eksotik Tenun",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
