export const siteConfig = {
  name: "종우부동산중개사무소",
  url: "https://realestate123.xyz",
  description:
    "마포구 성산동, 망원동, 연남동 집주인을 위한 매도, 전세, 월세 부동산 중개 상담.",
  owner: "이종우",
  phone: "010-0000-0000",
  kakaoChannel: "종우부동산 상담센터",
  areas: ["마포구 성산동", "마포구 망원동", "마포구 연남동"],
  services: ["부동산 매도 상담", "전세 상담", "월세 상담", "주거용 매물 중개"],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
