import React from "react";
import Head from "next/head";

function HeadComp() {
  return (
    <>
      <Head>
        <title>Govind Hand Print</title>
        <link rel="icon" href="/image/Govind Hand Print.png" />
        <meta
          name="description"
          content="We are a producer and manufacturer of Dabu print fabric in Akola, Chittorgarh, Rajasthan. We dabu print on cotton, silk fabric, and other fabrics. We dabu print on running fabric, sarees, bedsheets, and salwar suits. We dye with natural indigo and other colours. We use natural colour for dying. Dabu print, also known as resist mud block printing, is sometimes called Akola print. We conduct workshops to teach Dabu print and provide education about hand block printing."
        />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Govind Hand Print" />
        <meta
          property="og:description"
          content="We are a producer and manufacturer of Dabu print fabric. We dabu print on cotton, silk fabric, and other fabrics. We do natural colour dying on running fabric, bedsheets, sarees, and salwarsuits."
        />
        {/* <meta property="og:image" content="/image/banner500x300.jpg" /> */}
      </Head>
    </>
  );
}

export default HeadComp;
