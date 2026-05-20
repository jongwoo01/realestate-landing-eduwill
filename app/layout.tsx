import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BottomStickyBar from "./components/BottomStickyBar";
import Footer from "./components/Footer";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "마포구 부동산 매도·전세·월세 상담 | 종우부동산중개사무소",
    template: "%s | 종우부동산중개사무소",
  },
  description: siteConfig.description,
  keywords: [
    "마포구 부동산",
    "성산동 부동산",
    "망원동 부동산",
    "연남동 부동산",
    "마포구 매도 상담",
    "마포구 전세 상담",
    "마포구 월세 상담",
    "종우부동산중개사무소",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.name,
    title: "마포구 부동산 매도·전세·월세 상담 | 종우부동산중개사무소",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "마포구 부동산 매도·전세·월세 상담 | 종우부동산중개사무소",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <BottomStickyBar />
      </body>
    </html>
  );
}
