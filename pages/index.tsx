import type { NextPage } from "next";

export async function getStaticProps() {
  return {
    props: {
      layoutProps: {
        variant: "onlyFooter",
      },
    },
  };
}

const Home: NextPage = () => {
  return <></>;
};

export default Home;
