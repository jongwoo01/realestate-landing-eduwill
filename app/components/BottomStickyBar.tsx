import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function BottomStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white px-4 py-3 pb-safe">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:010-0000-0000"
          className="flex h-12 w-[20%] flex-col items-center justify-center rounded-lg border border-primary/20 bg-white text-primary transition-colors active:bg-gray-50"
        >
          <Phone className="h-5 w-5 mb-0.5" />
          <span className="text-[10px] font-medium">전화상담</span>
        </a>
        <a
          href="/consultation"
          className="flex h-12 w-[20%] flex-col items-center justify-center rounded-lg bg-[#FEE500] text-[#191919] transition-colors active:bg-[#FEE500]/90"
        >
          <MessageSquare className="h-5 w-5 mb-0.5 fill-current" />
          <span className="text-[10px] font-medium">카톡안내</span>
        </a>
        <Link
          href="/consultation"
          className="flex h-12 w-[60%] items-center justify-center rounded-lg bg-cta text-white transition-colors active:bg-cta/90 shadow-sm font-semibold"
        >
          마포구 매물 상담 신청
        </Link>
      </div>
    </div>
  );
}
