import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Building, Calendar, ArrowRight } from "lucide-react";
import { absoluteUrl, siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "마포구 부동산 거래 사례",
  description:
    "성산동 아파트 매도, 연남동 오피스텔 월세, 망원동 빌라 전세 등 종우부동산중개사무소의 마포구 주거용 매물 상담 사례입니다.",
  alternates: {
    canonical: "/cases",
  },
  openGraph: {
    title: "마포구 부동산 거래 사례",
    description:
      "종우부동산중개사무소가 상담부터 계약까지 직접 챙긴 마포구 주거용 매물 사례.",
    url: "/cases",
  },
};

const cases = [
  {
    title: "마포구 성산동 월드파크 2단지",
    result: "3주 내 계약",
    type: "매도",
    desc: "이사 일정 때문에 빠른 매도 상담이 필요했던 아파트입니다. 가격 조정과 온라인 홍보를 함께 진행해 3주 내 계약까지 연결했습니다. 단지명은 공개 가능하며 가격은 비공개입니다.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "마포구 연남동 연남스테이",
    result: "2주 내 임차인 계약",
    type: "월세",
    desc: "공실 기간이 길어져 임대 문의를 주신 오피스텔입니다. 사진을 재정리하고 조건 조정과 문의 응대를 진행해 2주 내 임차인 계약으로 마무리했습니다. 건물명은 공개 가능하며 가격은 비공개입니다.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "마포구 망원동 주택가 빌라",
    result: "문의 증가 후 계약 완료",
    type: "전세",
    desc: "기존 세입자 만기 일정에 맞춘 전세 상담 사례입니다. 주변 시세를 비교하고 보증금 조정 방향을 안내해 문의가 늘어난 뒤 계약이 완료되었습니다. 상세 주소는 비공개이며 사진 공개는 가능합니다.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function CasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "마포구 부동산 거래 사례",
    url: absoluteUrl("/cases"),
    itemListElement: cases.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: item.title,
        description: item.desc,
        image: item.image,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    })),
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-[calc(100vh-64px)] pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">마포구 부동산 거래 사례</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            종우부동산중개사무소가 상담부터 계약까지 직접 챙긴 사례입니다.<br />
            마포구 집주인 입장에서 부담 없이 확인해 보세요.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all group flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-cta text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.type}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-cta font-bold text-sm mb-3 bg-blue-50 w-fit px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.result}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-gray-400" />
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 최근 거래</span>
                  <button className="text-cta font-medium flex items-center gap-1 group-hover:underline">
                    상세 보기 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">내 매물도 이렇게 거래하고 싶다면?</h2>
          <p className="text-secondary mb-8 max-w-xl mx-auto">
            망설이지 말고 편하게 상담을 신청해 주세요. 현재 상황에 맞는 가장 현실적이고 효과적인 전략을 제안해 드립니다.
          </p>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cta text-white font-bold text-lg hover:bg-cta/90 transition-all">
            상담 신청 바로가기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
