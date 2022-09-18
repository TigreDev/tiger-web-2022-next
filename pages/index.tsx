import {
  Box,
  ToastPosition,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CustomToast from "../atoms/CustomToast/CustomToast";
import About from "../organism/About";
import Hero from "../organism/Hero";
import NeverGiveUpBanner from "/public/NeverGiveUpBanner.png";

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
      <Box position="relative" top="-78px" mb="calc(200px * -1)" zIndex="10">
        <Image src={NeverGiveUpBanner} alt="neverg" style={{ width: "100%" }} />
      </Box>
      <About />
    </Box>
  );
};

export default Landing;
