import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Conact from "./components/Conact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Como Residences",
  description: "Como Residences is the latest development of Nakheel located at Palm Jumeirah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
       </head>
      <Conact />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
