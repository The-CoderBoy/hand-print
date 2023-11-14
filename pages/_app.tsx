import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeadComp from "@/components/HeadComp";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadComp />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
