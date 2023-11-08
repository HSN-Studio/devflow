import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from "@/context/ThemeProvider";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--space-Grotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community driven platform for asking/answering questions related to programming.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-500",
        },
      }}
    >
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
