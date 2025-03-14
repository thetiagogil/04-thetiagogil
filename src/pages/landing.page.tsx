import { Stack, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilePhoto from "../assets/tg.png";

export const LandingPage = () => {
  const navigate = useNavigate();

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
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      px={2}
      zIndex={1000}
      component={motion.div}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <Typography
        textColor="neutral.high"
        textAlign="center"
        fontWeight="bold"
        fontSize={{ xs: 72, sm: 96 }}
        component={motion.h1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        TIAGO GIL
      </Typography>
      <Typography
        textColor="neutral.medium"
        textAlign="center"
        fontSize={{ xs: 24, sm: 36 }}
        component={motion.h3}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Full-stack Developer & Architect
      </Typography>
    </Stack>
  );
};
