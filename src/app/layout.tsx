import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./globals.css";
import Header from "@/components/header";
import ViewCanvas from "@/components/view-canvas";
import Footer from "@/components/footer";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-alpino">
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
