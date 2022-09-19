import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainContainer from "atoms/MainContainer";
import PaintedText from "atoms/PaintedText";
import JapanText from "molecules/JapanText";

const About = () => {
  return (
    <MainContainer
      mainSX={{
        bgColor: "brand.secondary",
        minH: "100vh",
      }}
      innerSX={{
        align: "center",
        justify: "center",
        overflow: "hidden",
      }}
    >
      <Flex flexDir="row" w="full" align="center" justify="end" zIndex={10}>
        <Flex
          textStyle="h1"
          color="white"
          flexBasis={{ md: "80%" }}
          mr={{ base: 10, md: 0 }}
          align="center"
          justify="center"
          position="relative"
        >
          <JapanText />
        </Flex>
        <Stack
          maxW="700px"
          w="full"
          mr={{ md: "10" }}
          spacing={6}
          sx={{ color: "white", w: "max-content" }}
        >
          <Text textStyle="p">
            {
              "I'm Ruben, an always in good mood developer, eager for learn and growth everyday."
            }
          </Text>
          <Text textStyle="p">
            With experience in startup environments, I consider myself a very
            goal-oriented person, with a clear vocation for self-management and
            a great motivation to always do my best in every delivery.
          </Text>
          <Text textStyle="p">
            By my nature I am a complete team player, always giving my best to
            ease the workload of all developers, and facilitating the
            relationships between teams. Creating communication flows from
            design, to product, through development and QA.
          </Text>
        </Stack>
      </Flex>
      <Flex
        position="absolute"
        p={{ base: "0", md: "12" }}
        zIndex="0"
        w="full"
        h="full"
        overflow="hidden"
        flexDirection="column"
        justify="space-between"
        sx={{ color: "white", pointerEvents: "none" }}
      >
        <Flex justify="space-between" sx={{ pointerEvents: "all" }}>
          <PaintedText text="Q" from="leftTop" />
          <PaintedText text="C" from="rightTop" />
        </Flex>
        <Flex justify="space-between" sx={{ pointerEvents: "all" }}>
          <PaintedText text="W" from="leftBottom" />
          <PaintedText text="C" from="rightBottom" />
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default About;
