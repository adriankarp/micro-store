import { Geist, Geist_Mono } from "next/font/google";
import "@micro-store/ui/globals.css";
import { Toaster } from "sonner";

import { Providers } from "@/components/providers";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Improve general layout (bring Header and Footer here)
  return (
    <html lang="en" suppressHydrationWarning>
      <title>micro-store</title>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          {children}
          <Toaster richColors theme="dark" />
        </Providers>
      </body>
    </html>
  );
}
