import {
  Box,
  ToastPosition,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import CustomToast from "atoms/CustomToast";
import About from "organism/About";
import Hero from "organism/Hero";
import NeverGiveUp from "atoms/NeverGiveUp";

const Landing = () => {
  const toast = useToast();
  const position = useBreakpointValue({
    base: "bottom-left",
    md: "top-left",
  }) as ToastPosition;

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      toast({
        position,
        render: () => (
          <CustomToast
            title="This website is under development"
            desc="Return to see how this progress!"
          />
        ),
      });
    }, 2000);
    return () => {
      clearTimeout(toastTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Head>
        <title>Ruben Tigre | Frontend Developer</title>
      </Head>
      <Hero />
      <NeverGiveUp />
      <About />
    </Box>
  );
};

export default Landing;
