import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BottomStickyBar from "./components/BottomStickyBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "종우부동산중개사무소 | 마포구 주거용 매물 전문 상담",
  description: "마포구 성산동, 망원동, 연남동 집주인을 위한 매도/전세/월세 상담.",
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
