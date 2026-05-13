import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Home, Key, Wallet, HelpCircle, ChevronRight, BarChart3, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeefa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        
        <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 text-cta" />
            <span>마포구 성산동·망원동·연남동 주거용 매물 상담</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            마포구 집주인을 위한 <br className="hidden md:block" />
            <span className="text-cta">꼼꼼한 중개 상담</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            종우부동산중개사무소 대표 공인중개사 이종우가<br />
            매도, 전세, 월세 상담을 지역 시세와 거래 흐름에 맞춰 안내드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/consultation" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cta text-white font-bold text-lg shadow-lg hover:bg-cta/90 transition-all active:scale-95"
            >
              마포구 매물 상담받기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/cases" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 text-white border border-white/20 font-medium text-lg hover:bg-white/20 transition-all"
            >
              거래 성공 사례 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  왜 종우부동산중개사무소에<br />상담해야 할까요?
                </h2>
                <p className="text-lg text-secondary">
                  마포구 성산동과 인근 주거용 매물을 주로 중개하며, 집주인 입장에서
                  부담 없이 상담받을 수 있도록 친절하고 빠르게 안내드립니다.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "응답이 빠른 편이고, 집주인과 직접 소통을 꼼꼼하게 합니다",
                  "성산동·망원동 아파트와 오피스텔 위주로 거래 경험이 많습니다",
                  "광고만 올리는 방식이 아니라 상담부터 계약까지 직접 챙깁니다"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cta shrink-0 mt-0.5" />
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm">
                <BarChart3 className="w-10 h-10 text-cta mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">3곳</div>
                <div className="text-sm font-medium text-secondary">성산동·망원동·연남동 전문</div>
              </div>
              <div className="bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm translate-y-6">
                <Users className="w-10 h-10 text-cta mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">3유형</div>
                <div className="text-sm font-medium text-secondary">매도·전세·월세 상담</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">유형별 맞춤 중개 전략</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              아파트, 오피스텔, 빌라 중심으로 현재 상황에 맞는 현실적인 상담을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">빠르고 제값 받는 매도</h3>
              <p className="text-secondary mb-6">
                이사 일정이나 희망 조건을 함께 보며, 가격 조정과 온라인 홍보 방향을 안내합니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 성산동·망원동 주변 시세 비교</li>
                <li>• 온라인 홍보와 문의 응대</li>
                <li>• 상담부터 계약까지 직접 진행</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">안심할 수 있는 전세</h3>
              <p className="text-secondary mb-6">
                기존 세입자 만기 일정과 보증금 조건을 함께 검토해 부담 없는 전세 상담을 돕습니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 주변 전세 시세 비교</li>
                <li>• 보증금 조정 방향 안내</li>
                <li>• 임대인·임차인 일정 조율</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">공실 줄이는 월세 상담</h3>
              <p className="text-secondary mb-6">
                공실 기간이 길어진 오피스텔과 빌라의 사진, 조건, 문의 응대 흐름을 재정리합니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 사진 재정리와 조건 조정</li>
                <li>• 문의 응대와 임차인 매칭</li>
                <li>• 공실 기간 최소화 상담</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">투명하고 체계적인 진행 절차</h2>
            <p className="text-lg text-secondary">
              광고만 올리는 방식이 아니라 상담부터 계약까지 이종우 대표가 직접 챙깁니다.
            </p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {[
              { title: "상담 접수", desc: "매도, 전세, 월세 중 필요한 거래 유형과 매물 정보를 편하게 남겨주세요." },
              { title: "지역 시세 확인", desc: "성산동·망원동·연남동의 주변 시세와 거래 흐름을 바탕으로 설명드립니다." },
              { title: "홍보 및 문의 응대", desc: "필요한 경우 사진과 조건을 재정리하고 온라인 홍보와 문의 응대를 진행합니다." },
              { title: "조건 조율 및 계약", desc: "집주인과 직접 소통하며 상담부터 계약까지 꼼꼼하게 챙깁니다." }
            ].map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cta text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-secondary">
              집주인 분들이 주로 궁금해하시는 내용을 모았습니다.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "아직 매도할지 결정 못 했는데 상담만 받아도 되나요?", a: "물론입니다. 마포구 집주인 입장에서 부담 없는 상담과 꼼꼼한 진행을 도와드립니다." },
              { q: "어떤 지역을 주로 상담하나요?", a: "마포구 성산동, 망원동, 연남동의 아파트, 오피스텔, 빌라 상담을 중심으로 진행합니다." },
              { q: "카카오톡으로도 문의할 수 있나요?", a: "카카오톡 채널에서 '종우부동산 상담센터'를 검색해 문의하실 수 있습니다." }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-primary">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cta shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-secondary leading-relaxed pl-14">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            마포구 집주인 입장에서 편하게 상담해 보세요
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            성산동, 망원동, 연남동 매물의 매도·전세·월세 상담을 빠르고 친절하게 안내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/consultation" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              온라인 상담 신청
            </Link>
            <a 
              href="tel:010-0000-0000" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              전화로 바로 문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
