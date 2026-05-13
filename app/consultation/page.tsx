"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ChevronRight, ShieldCheck } from "lucide-react";

export default function ConsultationPage() {
  const router = useRouter();
  const [txType, setTxType] = useState("매도");
  const [propType, setPropType] = useState("아파트");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const privacyAgreed = formData.get("privacyAgreed") === "on";

    if (!privacyAgreed) {
      setErrorMessage("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      transactionType: txType,
      propertyType: propType,
      location: String(formData.get("location") ?? "").trim(),
      details: String(formData.get("details") ?? "").trim(),
      privacyAgreed,
    };

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/consulting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submit failed");
      }

      router.push("/success");
    } catch {
      setErrorMessage("상담 신청 제출에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-[calc(100vh-64px)]">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">마포구 매물<br />상담 신청하기</h1>
              <p className="text-secondary leading-relaxed">
                현재 고민 중이신 내용을 편하게 남겨주세요.<br />
                이종우 대표 공인중개사가 확인 후 빠른 시일 내에 연락드립니다.
              </p>
            </div>
            
            <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-2 text-cta font-bold mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span>100% 비밀 보장</span>
              </div>
              <p className="text-sm text-secondary leading-relaxed">
                입력하신 정보는 상담 목적으로만 사용됩니다. 아직 결정을 내리지 못하셨더라도 부담 없이 성산동, 망원동, 연남동 매물 상담을 신청해 보세요.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-8">
              
              <div className="space-y-4">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">1</span>
                  기본 정보
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2" htmlFor="name">이름</label>
                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors" placeholder="홍길동" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2" htmlFor="phone">연락처</label>
                    <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors" placeholder="010-0000-0000" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">2</span>
                  거래 유형 및 종류
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">어떤 거래를 원하시나요?</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["매도", "전세", "월세"].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setTxType(type)}
                          className={`py-3 rounded-lg border font-medium text-sm transition-colors ${txType === type ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-secondary hover:bg-gray-50'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">매물 종류</label>
                    <div className="grid grid-cols-4 gap-2">
                      {["아파트", "오피스텔", "빌라", "기타"].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropType(type)}
                          className={`py-3 rounded-lg border font-medium text-sm transition-colors ${propType === type ? 'bg-primary border-primary text-white' : 'bg-white border-gray-300 text-secondary hover:bg-gray-50'}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">3</span>
                  상세 내용
                </h3>
                <input type="hidden" name="transactionType" value={txType} />
                <input type="hidden" name="propertyType" value={propType} />
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2" htmlFor="location">지역 또는 단지명</label>
                    <input required type="text" id="location" name="location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors" placeholder="예: 성산동 월드파크 2단지, 망원동 주택가" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2" htmlFor="details">문의 내용 (선택)</label>
                    <textarea id="details" name="details" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-colors resize-none" placeholder="희망하시는 가격이나 특별한 요청사항이 있다면 적어주세요."></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input required type="checkbox" name="privacyAgreed" className="mt-1 w-4 h-4 rounded border-gray-300 text-cta focus:ring-cta cursor-pointer" />
                  <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                    개인정보 수집 및 이용에 동의합니다. <br className="sm:hidden" />
                    <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> 안전하게 암호화되어 전송됩니다.
                    </span>
                  </span>
                </label>
              </div>

              {errorMessage && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {errorMessage}
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-cta text-white font-bold text-lg hover:bg-cta/90 transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? "제출 중입니다" : "상담 신청 완료하기"}
                <ChevronRight className="w-5 h-5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
