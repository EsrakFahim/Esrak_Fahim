import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Components/NavBar/NavBar";
import Cursor from "@/app/Components/Cursor/Cursor";
import Contact from "@/app/Components/Footer/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
      title: "Create Next App",
      description: "Generated by create next app",
};

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <body
                        className={`${inter.className} bg-primary text-TextPrimary`}
                  >
                        <NavBar />
                        <div className="mt-32">{children}</div>
                        <Contact />
                        <Cursor />
                  </body>
            </html>
      );
}
