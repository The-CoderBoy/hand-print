import { Kadwa, Grenze, Inter, Almendra } from "next/font/google";

const kadwa = Kadwa({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const grenze = Grenze({
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "700", "100", "200", "300", "500", "600", "800", "900"],
  subsets: ["latin"],
});

const almendra = Almendra({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export { kadwa, grenze, inter, almendra };
