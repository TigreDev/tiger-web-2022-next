import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../atoms/MainContainer";

const About = () => {
  return (
    <MainContainer
      mainSX={{
        bgColor: "brand.secondary",
        pt: { base: 20, md: 26 },
        minH: "100vh",
      }}
    >
      <Flex flexDir="row" w="full" align="center" justify="end">
        <Flex
          textStyle="h1"
          color="white"
          flexBasis={{ md: "80%" }}
          mr={{ base: 10, md: 0 }}
          align="center"
          justify="center"
        >
          <Text textAlign="center" maxW="min-content">
            限界を超えろ
          </Text>
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
    </MainContainer>
  );
};

export default About;
