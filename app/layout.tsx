import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/i18nProvider";
import { SerwistProvider } from "@serwist/next/react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Maryam Miraei Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // ${geistSans.variable} ${geistMono.variable}
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`min-h-full antialiased bg-body-first dark:bg-body-second`}
    >
      <body className="flex flex-col">
        <SerwistProvider
          swUrl="/sw.js"
          disable={process.env.NODE_ENV === "development"}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <I18nProvider>{children}</I18nProvider>
          </ThemeProvider>
        </SerwistProvider>
      </body>
    </html>
  );
}
