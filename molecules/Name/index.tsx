import { Stack, Box, Heading, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import NameTitle from "/public/NameTitle.png";

const Name = () => {
  return (
    <>
      <Stack
        justify={{ md: "center" }}
        mt={{ base: 20, md: 0 }}
        minH={{ md: "100vh" }}
        alignSelf={{ base: "start", md: "initial" }}
      >
        <Box color="white">
          <Image src={NameTitle} alt="NameTitle" />
          <Heading
            fontSize={{ base: "1rem", md: "xl", lg: "4xl" }}
            letterSpacing="1em"
            ml={{ base: 0.5, lg: 2 }}
            textShadow="3px 3px #1f114d"
            textAlign="center"
          >
            FRONTEND
          </Heading>
        </Box>
        {/* <Text
          position="absolute"
          bottom={20}
          right={4}
          letterSpacing="0.03em"
          fontSize="0.750rem"
        >
          art by{" "}
          <Link href="https://www.instagram.com/lais.draws/" target="_blank">
            @lais.draws
          </Link>
        </Text> */}
      </Stack>
    </>
  );
};

export default Name;
