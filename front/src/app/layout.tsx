import type { Metadata, Viewport } from "next";
import { SerwistProvider } from "@serwist/next/react";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

// Titres : proche de la Bahnschrift SemiBold SemiCondensed de la présentation.
const barlow = Barlow_Semi_Condensed({
  variable: "--font-barlow",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FindSpeed",
  description: "Trouver un produit et sa cabine au marché.",
  applicationName: "FindSpeed",
};

export const viewport: Viewport = {
  themeColor: "#ffd21b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SerwistProvider
          swUrl="/sw.js"
          disable={process.env.NODE_ENV === "development"}
        >
          {children}
        </SerwistProvider>
      </body>
    </html>
  );
}
