import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BottomStickyBar from "./components/BottomStickyBar";

export const metadata: Metadata = {
  title: "바른공인중개사 | 지역 전문 안심 부동산",
  description: "과장 없이 정확한 거래를 만듭니다. 매도/전월세 집주인 전문 상담.",
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
        <BottomStickyBar />
      </body>
    </html>
  );
}
