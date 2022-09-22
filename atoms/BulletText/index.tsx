import React from "react";
import { Box, HStack, Text, TextProps } from "@chakra-ui/react";
import markerBullet from "public/img/markerBullet.png";
import Image from "next/image";

const BulletText = (props: TextProps) => {
  return (
    <HStack>
      <Box position="relative" minH="44px" minW="44px">
        <Image src={markerBullet} alt="markerBullet" />
      </Box>
      <Text {...props}>{props.children}</Text>
    </HStack>
  );
};

export default BulletText;
