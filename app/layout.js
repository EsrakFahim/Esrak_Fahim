import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Components/NavBar/NavBar";
import Cursor from "@/app/Components/Cursor/Cursor";
import Contact from "@/app/Components/Footer/Contact";
import MobileWarning from "@/app/Components/MobileWarning/MobileWarning"; // Import the new warning component
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
      title: "Esrak Fahim",
      description: "Esrak Fahim's personal & portfolio website",
};

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <body
                        className={`${inter.className} bg-primary text-TextPrimary max-w-[100vw] overflow-x-hidden`}
                  >
                        <NavBar />
                        <div>
                              {children}
                              <Analytics />
                              <SpeedInsights />
                        </div>
                        <Contact />
                        <Cursor />
                        <MobileWarning /> {/* Add the mobile warning here */}
                  </body>
            </html>
      );
}
