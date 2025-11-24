import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatWhatsApp";

const FigtreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pingoestudiocriativo.com.br'),
  title: {
    default: "Pingo Estúdio Criativo - Agência de Marketing Digital e Criação",
    template: "%s | Pingo Estúdio Criativo"
  },
  description: "Agência de marketing digital, branding e criação de conteúdo. Transforme sua marca com estratégias criativas e eficientes.",
  keywords: ["marketing digital", "agência criativa", "branding", "design gráfico", "conteúdo digital", "estratégia de marca", "publicidade"],
  authors: [{ name: "Pingo Estúdio Criativo" }],
  creator: "Pingo Estúdio Criativo",
  publisher: "Pingo Estúdio Criativo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pingoestudiocriativo.com.br",
    siteName: "Pingo Estúdio Criativo",
    title: "Pingo Estúdio Criativo - Agência de Marketing Digital e Criação",
    description: "Agência de marketing digital, branding e criação de conteúdo. Transforme sua marca com estratégias criativas e eficientes.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pingo Estúdio Criativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pingo Estúdio Criativo - Agência de Marketing Digital e Criação",
    description: "Agência de marketing digital, branding e criação de conteúdo. Transforme sua marca com estratégias criativas e eficientes.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/ewp7rzr.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
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
