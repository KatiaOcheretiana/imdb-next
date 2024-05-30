import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";

import { Header } from "../components/Header";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <NavBar />
            <SearchBox />
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
