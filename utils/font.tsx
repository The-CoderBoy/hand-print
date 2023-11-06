import { Kadwa, Grenze } from "next/font/google";

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

export { kadwa, grenze };
