import Link from "next/link";
import { MessageSquare, Phone, UserRound } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-bold tracking-tight">종우부동산중개사무소</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
            마포구 성산동과 인근 주거용 매물을 주로 중개합니다. 집주인 입장에서
            부담 없이 상담받을 수 있도록 친절하고 빠르게 안내드립니다.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-white">상담 정보</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex gap-2">
              <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              대표 공인중개사 이종우
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              <a href="tel:010-0000-0000" className="hover:text-white">
                010-0000-0000
              </a>
            </li>
            <li className="flex gap-2">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-cta" />
              카카오톡 채널 &apos;종우부동산 상담센터&apos; 검색
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-white">전문 지역</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["마포구 성산동", "마포구 망원동", "마포구 연남동"].map((area) => (
              <span
                key={area}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/consultation"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-slate-100"
          >
            상담 신청하기
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        © 종우부동산중개사무소. 매도 / 전세 / 월세 상담 가능.
      </div>
    </footer>
  );
}
