
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ViewCanvas from "@/components/view-canvas";
import "./globals.css";



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
