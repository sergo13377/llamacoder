import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

let title = "MakeApp – AI Code Generator";
let description = "Generate your next app with MakeAppAI";
let url = "https://MakeAppAI.org/";
let ogimage = "https://app.makeappai.org/og-image.png";
let sitename = "MakeAppAI.org";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="MakeAppAI.org" />
      </head>

      {children}
    </html>
  );
}
