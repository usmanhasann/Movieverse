import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
//entry point like index.js execute ist
import "./globals.css";
import "../styles/style.css";
import "../styles/blue.css";
import "../styles/theme.css";
import Sidebar from "@/components/sidebar/sidebar";
import Providers from "./providers";
import ThemeSwitch from "@/components/panel/ThemeSwitch";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movieverse| MovieWeb",
  description: "This is a collection of Movies you can watch.",
  icons: {
    icon: "/favicon.ico",
  },
};
//r>pa
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
