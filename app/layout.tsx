import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development" 
      ? "http://localhost:3000" 
      : "https://www.bolidiviertete.com"
  ),
  title: "Boli-Diviértete - Alquiler de Juegos Tradicionales en Bogotá y la Sabana",
  description: "Alquiler de boliranas, tejos y juegos tradicionales para eventos sociales y empresariales en Bogotá y la Sabana. ¡Lleva la diversión a tu fiesta con Boli-Diviértete!",
  keywords: [
    "alquiler de juegos tradicionales",
    "boliranas en Bogotá",
    "tejos para eventos sociales",
    "alquiler de juegos para fiestas",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Boli-Diviértete - Alquiler de Juegos Tradicionales en Bogotá y la Sabana",
    description: "Alquiler de boliranas, tejos y juegos tradicionales para eventos sociales y empresariales en Bogotá y la Sabana.",
    url: "https://www.bolidiviertete.com",
    siteName: "Boli-Diviértete",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boli-Diviértete Alquiler de Juegos",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        
        {/* Componentes Globales */}
        <WhatsAppFloat />
        <Analytics />

        {/* SEO Estructurado (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Boli-Diviértete",
              "image": "https://www.bolidiviertete.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Carrera 77L bis #48B 17 sur",
                "addressLocality": "Bogotá",
                "addressCountry": "CO",
              },
              "telephone": "+573118417533",
              "url": "https://www.bolidiviertete.com",
              "openingHours": "Mo-Su 07:30-19:00",
              "priceRange": "$$", // Opcional: indica rango de precios
            }),
          }}
        />
      </body>
    </html>
  );
}