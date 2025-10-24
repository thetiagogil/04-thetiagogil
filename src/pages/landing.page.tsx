import profilePhoto from "@/assets/tg.png";
import { useLanguageContext } from "@/hooks/use-language-context";
import { Stack, Typography } from "@mui/joy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguageContext();

  useEffect(() => {
    const img = new Image();
    img.src = profilePhoto;

    setTimeout(() => {
      navigate("/home");
    }, 4000);
  }, [navigate]);

  return (
    <Stack
      height="100vh"
      width="100vw"
      position="fixed"
      justifyContent="center"
      alignItems="center"
      top={0}
      left={0}
      px={2}
      zIndex={1000}
      sx={{
        opacity: 1,
        animationName: "fadeOut",
        animationDuration: "1s",
        animationTimingFunction: "ease",
        animationFillMode: "forwards",
        animationDelay: "3s",
        willChange: "opacity",
      }}
    >
      <Typography
        textColor="neutral.high"
        textAlign="center"
        fontWeight="bold"
        fontSize={{ xs: 72, sm: 96 }}
        sx={{
          opacity: 0,
          animationName: "fadeIn",
          animationDuration: "1s",
          animationTimingFunction: "ease",
          animationFillMode: "forwards",
        }}
      >
        TIAGO GIL
      </Typography>
      <Typography
        textColor="neutral.medium"
        textAlign="center"
        fontSize={{ xs: 24, sm: 36 }}
        sx={{
          opacity: 0,
          animationName: "fadeIn",
          animationDuration: "1s",
          animationTimingFunction: "ease",
          animationDelay: "1s",
          animationFillMode: "forwards",
        }}
      >
        {t("title")}
      </Typography>
    </Stack>
  );
};
