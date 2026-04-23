import { useI18n } from "@/providers/i18n-context";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const minScrollTopOffset = 640;

export const ScrollTopButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const updateScrollTopVisibility = () => {
      const threshold = Math.max(window.innerHeight, minScrollTopOffset);
      const nextVisible = window.scrollY > threshold;

      setShowScrollTop((current) =>
        current === nextVisible ? current : nextVisible,
      );
    };

    updateScrollTopVisibility();

    window.addEventListener("scroll", updateScrollTopVisibility, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollTopVisibility);

    return () => {
      window.removeEventListener("scroll", updateScrollTopVisibility);
      window.removeEventListener("resize", updateScrollTopVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t("common.backToTop")}
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-colors duration-300 hover:bg-primary"
    >
      <ArrowUp size={18} strokeWidth={1.8} />
    </button>
  );
};
