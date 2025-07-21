import { Stack } from "@mui/joy";
import { ReactNode } from "react";
import { FloatMenu } from "../ui/float-button";

type MainContainerProps = {
  children: ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <Stack
      className="fade-in"
      height="100vh"
      width="100%"
      minWidth={{ lg: 1200 }}
      maxWidth={{ lg: 1400 }}
      justifySelf="center"
      overflow="hidden"
      p={{ xs: 2, md: 6 }}
    >
      <Stack flex={1} height="100vh" overflow="hidden">
        {children}
      </Stack>
      <FloatMenu />
    </Stack>
  );
};
