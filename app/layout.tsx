import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICT Services | Ireland's Foremost IT Solutions Partner",
  description: "ICT Services - Ireland's leading IT field services, roll-out and support company. 100+ expert engineers providing nationwide 24/7 IT support and solutions.",
  keywords: "IT services, field services, IT support, hardware procurement, retail support, IT resourcing, Ireland IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
