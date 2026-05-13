import Link from "next/link";
import { CheckCircle2, Building, Calendar, ArrowRight } from "lucide-react";

export default function CasesPage() {
  const cases = [
    {
      title: "OO동 푸르지오 34평 매매",
      result: "의뢰 2주 만에 거래 완료",
      type: "매도",
      desc: "급매로 내놓으셨으나, 주변 호재와 단지 내 로얄동의 강점을 어필하여 원하시던 목표가에 성공적으로 매도해 드렸습니다.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "OO역 역세권 상가 임대",
      result: "공실 3일 만에 우량 임차인 계약",
      type: "월세",
      desc: "기존 임차인 퇴거 전부터 대기 수요자에게 적극적으로 브리핑하여, 공실 기간을 최소화하고 안정적인 수익을 확보했습니다.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "신축 빌라 전세 매칭",
      result: "안심 전세보증보험 가입 완료",
      type: "전세",
      desc: "최근 전세 사기 이슈로 거래가 어려웠으나, 정확한 권리 분석과 투명한 공개로 임대인과 임차인 모두가 안심하는 계약을 성사시켰습니다.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-[calc(100vh-64px)] pb-12">
      <div className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">성공적인 거래 사례</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            바른공인중개사가 만들어낸 확실한 결과들을 확인해 보세요.<br />
            다음 성공 사례의 주인공은 바로 당신입니다.
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
