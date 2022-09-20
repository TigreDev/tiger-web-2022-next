import {
  Box,
  ToastPosition,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { LegacyRef, useEffect, useRef } from "react";
import CustomToast from "atoms/CustomToast";
import About from "organism/About";
import Hero from "organism/Hero";
import NeverGiveUp from "molecules/NeverGiveUp";
import Work from "organism/Work";
import TrainBanner from "molecules/TrainBanner";

const Landing = () => {
  const pageRef = useRef(null);

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
    <Box position="relative" ref={pageRef}>
      <Head>
        <title>Ruben Tigre | Frontend Developer</title>
      </Head>
      <Hero />
      <NeverGiveUp />
      <About />
      <TrainBanner containerRef={pageRef} />
      <Work />
    </Box>
  );
};

export default Landing;
