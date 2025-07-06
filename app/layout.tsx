import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildFlow - AI-Powered SaaS Platform for Construction",
  description:
    "The intelligent, all-in-one platform designed for storm restoration and construction companies. Powered by Vibezs.io metadata-driven architecture.",
  keywords: [
    "construction software",
    "storm restoration",
    "AI construction",
    "BuildFlow",
    "Vibezs.io",
    "restoration companies",
    "construction SaaS",
  ],
  authors: [
    {
      name: "BuildFlow Team",
      url: "https://buildflow.com",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildflow.com",
    title: "BuildFlow - AI-Powered SaaS Platform for Construction",
    description:
      "The intelligent, all-in-one platform designed for storm restoration and construction companies.",
    siteName: "BuildFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildFlow - AI-Powered SaaS Platform for Construction",
    description:
      "The intelligent, all-in-one platform designed for storm restoration and construction companies.",
    creator: "@buildflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
