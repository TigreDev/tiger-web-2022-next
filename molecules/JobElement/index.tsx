import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import BulletText from "atoms/BulletText";
import RoundSticker from "atoms/RoundSticker";
import HelloSticker from "atoms/HelloSticker";
import React from "react";

export interface JobElementProps {
  company: string;
  title: string;
  dates: [string, string];
  bulletPoints: string[];
  image: "RoundSticker" | "SkySticker" | "EasySticker";
  orientation: "left" | "right";
}

const JobElement = ({
  company,
  title,
  dates,
  bulletPoints,
  image,
  orientation,
}: JobElementProps) => {
  const imageByProp = {
    RoundSticker: <RoundSticker orientation="left" />,
    SkySticker: <HelloSticker orientation={orientation} />,
    EasySticker: <RoundSticker orientation={orientation} />,
  };

  return (
    <Flex
      flexDirection={{
        base: "column",
        md: orientation === "left" ? "row" : "row-reverse",
      }}
      w="full"
      py={{ base: 8, md: 20 }}
    >
      <Center
        minW="50%"
        {...(orientation === "left" ? { mr: { md: 10 } } : { ml: { md: 10 } })}
        mb={{ base: 4, md: 0 }}
      >
        <Center w="fit-content">{imageByProp[image]}</Center>
      </Center>
      <VStack align="flex-start" w="full">
        <VStack w="full" align="flex-start">
          <Text textStyle="h1">{company}</Text>
          <Text textStyle="h3">{title}</Text>
          <Text textStyle="h3">{`${dates[0]} - ${dates[1]}`}</Text>
        </VStack>
        <VStack
          ml={{ md: "-48px !important" }}
          pt="4"
          align="flex-start"
          maxW={{ md: "600px" }}
          spacing={4}
        >
          {bulletPoints.map((bullet, index) => (
            <BulletText textStyle="p" key={`${company}-desc-${index}`}>
              {bullet}
            </BulletText>
          ))}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default JobElement;
