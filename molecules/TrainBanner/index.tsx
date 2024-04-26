import React, { useRef } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import tunnel from "public/img/tunnel.png";
import TrainCar from "public/img/traincar.png";
import { motion, useScroll, useTransform } from "framer-motion";

const TrainBanner = ({
  containerRef,
}: {
  containerRef: React.LegacyRef<HTMLDivElement> | undefined;
}) => {
  //Scroll feature
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const desktopTranslate = useTransform(scrollYProgress, [0, 1], [1200, -700]);
  const mobileTranslate = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const translateX = useBreakpointValue({
    base: mobileTranslate,
    md: desktopTranslate,
  });

  return (
    <Flex
      position="relative"
      w="full"
      h={{ base: "200px", md: "550px" }}
      zIndex="20"
      flexDirection="row"
      justify="center"
      align="center"
      overflow="hidden"
      pt={{ base: 5, md: 0 }}
      ref={componentRef}
    >
      <Image
        src={tunnel}
        alt="tunnel"
        layout="fill"
        objectPosition="center"
        objectFit="cover"
        priority
      />
      <motion.div
        style={{
          translateX,
        }}
      >
        <Image src={TrainCar} alt="traincar" />
      </motion.div>
    </Flex>
  );
};

export default TrainBanner;
