import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import TrainBackground from "public/img/train.png";
import TrainCar from "public/img/traincar.png";

const TrainSection = () => {
  return (
    <Box position="relative" mt="calc(5% * -1)" mb="calc(12% * -1)" zIndex="20">
      <Image src={TrainBackground} alt="trainBg" width="100vw" priority />
      <Image src={TrainCar} alt="trainCar" />
    </Box>
  );
};

export default TrainSection;
