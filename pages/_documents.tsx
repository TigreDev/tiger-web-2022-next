import { Head } from "next/document";
import React from "react";

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="title" content="Tiger Web" />
      <meta
        name="description"
        content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/mediumTigerIcon.png" />
      <meta property="og:title" content="Ruben Tigre | Frontend developer" />
      <meta
        property="og:description"
        content="The personal website of Ruben Tigre, an 'always in good mood' Frontend developer"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="%PUBLIC_URL%/mediumTigerIcon.png"
      />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.rubentigre.dev" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </Head>
  );
};

export default CustomHead;
