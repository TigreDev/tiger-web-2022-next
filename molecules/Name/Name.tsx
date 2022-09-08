import { Stack, Box, Heading, Text, Link } from "@chakra-ui/react";

const Name = () => {
  return (
    <Stack
      justify={{ md: "center" }}
      mt={{ base: 20, md: 0 }}
      minH={{ md: "100vh" }}
      alignSelf={{ base: "start", md: "initial" }}
    >
      <Box color="white">
        <Heading
          fontSize={{ base: "3rem", md: "6rem", lg: "10rem" }}
          textShadow={{ base: "4px 4px #1f114d", md: "8px 8px #1f114d" }}
        >
          Ruben Tigre
        </Heading>
        <Heading
          fontSize={{ base: "1rem", md: "xl", lg: "4xl" }}
          ml={{ base: 0.5, lg: 2 }}
        >
          Frontend developer
        </Heading>
      </Box>
      <Text
        position="absolute"
        bottom={4}
        right={4}
        fontFamily="encode"
        letterSpacing="0.03em"
        fontSize="0.750rem"
      >
        art by{" "}
        <Link href="https://www.instagram.com/lais.draws/" target="_blank">
          @lais.draws
        </Link>
      </Text>
    </Stack>
  );
};

export default Name;
