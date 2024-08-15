import { Inter } from "next/font/google";
import "./globals.css";
import TitleLogo from "@/components/TitleNav";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventure",
  description: "Eventure is a platform for hosting and managing events",
};

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={`${inter.className} font-mono`}>
        <TitleLogo />
          {children}
          </body>
      </html>
    </UserProvider>
  );
}
