import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NeverGiveUpBanner from "/public/img/NeverGiveUpBanner.png";

const NeverGiveUp = () => {
  return (
    <Box position="relative" w="full" h="500px">
      <Image
        src={NeverGiveUpBanner}
        alt="neverg"
        layout="fill"
        objectPosition="center center"
        objectFit="cover"
      />
    </Box>
  );
};

export default NeverGiveUp;
