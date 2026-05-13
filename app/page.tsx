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
            <span>안심 거래 보장 지역 전문 부동산</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            내 집의 가치를 아는 <br className="hidden md:block" />
            <span className="text-cta">진짜 전문가</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            과장된 약속보다 정확한 시세 분석으로 답합니다.<br />
            매도부터 전월세 임대까지, 빠르고 안전한 거래를 약속드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/consultation" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cta text-white font-bold text-lg shadow-lg hover:bg-cta/90 transition-all active:scale-95"
            >
              내 매물 상담받기
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
                  왜 바른공인중개사에<br />매물을 맡겨야 할까요?
                </h2>
                <p className="text-lg text-secondary">
                  수많은 중개사무소 중에서도, 실무 경험과 확실한 데이터로 증명합니다. 
                  동네 부동산을 넘어선 체계적인 마케팅을 경험해보세요.
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "한국공인중개사협회 정식 등록 및 보증보험 2억 원 가입",
                  "주변 단지 실거래가 및 매물 동향 완벽 분석",
                  "온/오프라인 통합 마케팅으로 최단기 거래 성사율 1위"
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
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm font-medium text-secondary">최근 1년 거래 건수</div>
              </div>
              <div className="bg-background rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm translate-y-6">
                <Users className="w-10 h-10 text-cta mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm font-medium text-secondary">고객 만족도</div>
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
              매도부터 전월세까지, 상황에 맞는 최적의 전략으로 집주인 분들의 고민을 해결합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">빠르고 제값 받는 매도</h3>
              <p className="text-secondary mb-6">
                정확한 시세 평가와 매물 브랜딩을 통해, 하락기에도 경쟁력 있는 가격으로 매수자를 찾습니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 매물 사진 촬영 및 브랜딩</li>
                <li>• 주요 포털 프리미엄 노출</li>
                <li>• 대기 매수자 네트워크 활용</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">안심할 수 있는 전세</h3>
              <p className="text-secondary mb-6">
                최근 전세 시장의 불안감을 해소할 수 있도록, 임대인과 임차인 모두가 안심하는 계약을 진행합니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 우량 세입자 선별 매칭</li>
                <li>• 권리 분석 및 특약 안전 장치</li>
                <li>• 보증보험 가입 안내 지원</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-cta" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">공실 없는 월세/수익형</h3>
              <p className="text-secondary mb-6">
                안정적인 월 수익을 창출할 수 있도록, 공실을 최소화하고 꼼꼼한 세입자 관리를 돕습니다.
              </p>
              <ul className="space-y-2 text-sm text-secondary font-medium">
                <li>• 신용 확인 및 우량 세입자 매칭</li>
                <li>• 예상 수익률 및 세금 분석</li>
                <li>• 임대차 계약 후 지속 관리</li>
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
              상담부터 계약까지, 모든 과정은 투명하게 공개되며 집주인분과 수시로 소통합니다.
            </p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {[
              { title: "상담 신청", desc: "온라인이나 전화를 통해 매물 정보와 원하시는 조건을 접수합니다." },
              { title: "현장 방문 및 시세 분석", desc: "담당 중개사가 직접 방문하여 매물 상태를 확인하고 정확한 적정 시세를 산출합니다." },
              { title: "마케팅 및 매수/임차인 매칭", desc: "최적의 조건으로 주요 포털에 광고를 진행하며, 확보된 대기 수요자에게 브리핑합니다." },
              { title: "조건 조율 및 계약 완료", desc: "금액과 일정을 조율하고, 안전한 특약이 포함된 계약서를 작성하여 마무리합니다." }
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
              { q: "아직 매도할지 결정 못 했는데 상담만 받아도 되나요?", a: "물론입니다. 현재 시세와 시장 상황을 파악하는 것만으로도 향후 결정에 큰 도움이 됩니다. 부담 없이 상담받아보세요." },
              { q: "세입자가 살고 있는데, 비밀리에 매매가 가능할까요?", a: "가능합니다. 세입자분과 불필요한 마찰이 없도록, 사전 조율된 고객에게만 한정적으로 브리핑하는 '비공개 매매' 방식으로 진행해 드립니다." },
              { q: "수수료는 언제, 어떻게 결제하나요?", a: "법정 중개보수 요율을 준수하며, 원칙적으로 잔금일에 거래가 최종 완료된 후 청구됩니다." }
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
            내 소중한 자산, 믿을 수 있는 전문가와 상의하세요
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            복잡한 절차는 저희가 챙기겠습니다. 원하시는 결과를 편안하게 기다리시면 됩니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/consultation" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              온라인 상담 신청
            </Link>
            <a 
              href="tel:010-1234-5678" 
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
