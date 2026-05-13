import Link from "next/link";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">종우부동산중개사무소</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/cases" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            대표 사례
          </Link>
          <Link href="/consultation" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            상담 안내
          </Link>
          <Link
            href="/consultation"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
          >
            마포구 매물 상담
          </Link>
        </nav>

        {/* Mobile quick call button */}
        <a
          href="tel:010-0000-0000"
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-secondary"
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
