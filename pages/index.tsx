import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import largerTiger from "../public/largerTiger.png";

export async function getStaticProps() {
  return {
    props: {
      layoutProps: {
        variant: "onlyFooter",
        bgImage: largerTiger,
      },
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiger-sites a Next and Chakra UI template</title>
        <meta
          name="description"
          content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
        />

        <meta
          property="og:description"
          content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
        />
      </Head>
      <VStack>
        <VStack>
          <Heading>Tiger Sites</Heading>
          <Text>A NextJs template powered with Chakra and TS</Text>
        </VStack>
        <HStack></HStack>
      </VStack>
    </>
  );
};

export default Home;
