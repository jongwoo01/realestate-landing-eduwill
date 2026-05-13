import Link from "next/link";
import { CheckCircle2, Phone, MessageSquare, ArrowLeft } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-[calc(100vh-64px)] items-center justify-center py-12 px-4">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm max-w-2xl w-full text-center">
        
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          상담 신청이 완료되었습니다!
        </h1>
        
        <p className="text-lg text-secondary mb-8 leading-relaxed max-w-md mx-auto">
          담당 공인중개사가 내용을 꼼꼼히 확인한 후,<br />
          <strong className="text-primary font-medium">24시간 이내에</strong> 입력하신 연락처로 연락드리겠습니다.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-10 text-left border border-gray-100">
          <h3 className="font-bold text-primary mb-3">급한 상담이 필요하신가요?</h3>
          <p className="text-sm text-secondary mb-4">
            바로 상담을 원하시는 경우, 아래 연락처로 문의해 주시면 친절하게 안내해 드리겠습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a 
              href="tel:010-1234-5678"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white border border-gray-200 text-primary font-medium hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              010-1234-5678
            </a>
            <a 
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FEE500] text-[#191919] font-medium hover:bg-[#FEE500]/90 transition-colors"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              카카오톡 문의
            </a>
          </div>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 text-secondary hover:text-primary font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
