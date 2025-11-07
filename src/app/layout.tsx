import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatWhatsApp";

const FigtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pingo Estudio Criativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://use.typekit.net/ewp7rzr.css" />
      </head>
      <body
        className={`${FigtreeSans.variable} antialiased`}
      >
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
