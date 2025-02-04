import { Geist, Geist_Mono } from "next/font/google";
import { Bai_Jamjuree } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/utility.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Steel Mans Gears - Home",
  description:
    "This app is created for the Steel Mans gears and they are famously known for their product sold for gears",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "${geistSans.variable} ${geistMono.variable} ${baiJamjuree.variable}"
        }
      >
        {children}
      </body>
    </html>
  );
}
