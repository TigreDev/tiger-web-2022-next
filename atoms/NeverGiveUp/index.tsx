import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NeverGiveUpBanner from "/public/NeverGiveUpBanner.png";

const NeverGiveUp = () => {
  return (
    <Box position="relative" mt="calc(5% * -1)" mb="calc(12% * -1)" zIndex="20">
      <Image src={NeverGiveUpBanner} alt="neverg" />
    </Box>
  );
};

export default NeverGiveUp;
