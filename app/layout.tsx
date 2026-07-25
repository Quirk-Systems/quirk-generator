import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quirk Generator",
  description:
    "One prompt, many models — generate AI images side by side for the Quirkverse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
