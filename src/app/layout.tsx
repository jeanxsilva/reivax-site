import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Whatsapp from "@/components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reivax Instalações Elétricas",
  description: "Energia que impulsiona com segurança e eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Whatsapp></Whatsapp>
    </html>
  );
}
