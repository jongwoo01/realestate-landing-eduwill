import type { Metadata } from "next";
import ConsultationForm from "./ConsultationForm";

export const metadata: Metadata = {
  title: "마포구 매물 상담 신청",
  description:
    "마포구 성산동, 망원동, 연남동 매도, 전세, 월세 상담을 온라인으로 신청하세요. 상담 목적의 정보만 받아 이종우 대표 공인중개사가 확인합니다.",
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    title: "마포구 매물 상담 신청",
    description:
      "성산동, 망원동, 연남동 집주인을 위한 매도, 전세, 월세 상담 신청.",
    url: "/consultation",
  },
};

export default function ConsultationPage() {
  return <ConsultationForm />;
}
