import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CustomToast = ({ title, desc }: Record<"title" | "desc", string>) => {
  return (
    <Box
      bg="white"
      color="black"
      boxShadow="dark-lg"
      fontFamily="encode"
      px={6}
      py={4}
    >
      <Heading fontSize={{ base: "md", md: "lg" }}>{title}</Heading>
      <Text
        fontSize={{ base: "xs", md: "md" }}
        textAlign="center"
        letterSpacing="0.04em"
      >
        {desc}
      </Text>
    </Box>
  );
};

export default CustomToast;
