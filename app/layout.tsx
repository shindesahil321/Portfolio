import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahil Shinde | Personal Portfolio",
  description: "Sahil Shinde, a Software Engineer from India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative pt-28 sm:pt-36 bg-background text-foreground`}
      >
        {/* Subtle Background Glow */}
        <div className="bg-gradient-to-br from-pink-100/50 to-purple-100/40 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[8rem] sm:w-[68.75rem] dark:from-pink-900/20 dark:to-purple-900/20"></div>
        <div className="bg-gradient-to-br from-blue-100/50 to-gray-100 absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[8rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-blue-900/20 dark:to-gray-900/20"></div>

        {/* Content Wrapper */}
        <ActiveSectionContextProvider>
          <Header />
          <main className="container mx-auto px-4 lg:px-8">{children}</main>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
