import type { Metadata } from 'next'
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "DHRMK",
  description: "dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
