import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DetailBackButton = ({
  label,
  fallbackTo = "/timeline",
}: {
  label: string;
  fallbackTo?: string;
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (typeof historyState?.idx === "number" && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate(fallbackTo, { replace: true });
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 font-mono text-[10px] cursor-pointer uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-[11px]"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      <span>{label}</span>
    </button>
  );
};
