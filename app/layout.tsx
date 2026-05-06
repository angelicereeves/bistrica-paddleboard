import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bistrica Paddle Saranda",
  description: "Paddle board rentals in Sarandë, Albania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}