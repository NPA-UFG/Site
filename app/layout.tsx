import type { Metadata } from "next";
import { fontDisplay, fontHead, fontMono, fontSerif } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-npa.vercel.app"),
  title: {
    default: "NPA — Núcleo de Pesquisas Aeroespaciais",
    template: "%s — NPA",
  },
  description:
    "Núcleo de Pesquisas Aeroespaciais (NPA/UFG) — Ad Astra Per Aspera.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        fontDisplay.variable,
        fontHead.variable,
        fontMono.variable,
        fontSerif.variable,
      )}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
