import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import {Nav} from "./_components/comps/navbar";
import { SideBar } from "./_components/comps/sidebar";
import { Suspense } from "react";
import {Toaster} from "sonner"
import { MobileNav } from "./_components/comps/mobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prompts | By Nayef",
  description: "Explore the best prompts used by the community to get the best experience using GPT.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  url: "https://prompts.nayef.dev/"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
        <Toaster richColors position="top-center"/>

        <div className="">
                <Nav/>
                <div className="w-screen flex mx-auto justify-center">
                  <MobileNav/>
                </div>
                <Suspense>
                  {children}
                </Suspense>
              
         </div>
          </TRPCReactProvider>
         
      </body>
    </html>
  );
}
