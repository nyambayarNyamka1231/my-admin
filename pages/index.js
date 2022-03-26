import Head from "next/head";
import React, { useState } from "react";

import { getAllPlitkas, getAllUsButsalgagches } from "../lib/api";
import Layout from "../components/layout";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/components/container";
import MainMenu from "@/components/MainMenu";
import CategoriesList from "@/components/categoriesList";

export default function Home({ allPlitkas, allUsButsalgagches }) {
  const [menu, setMenu] = React.useState("us butsalgagch");
  console.log(allPlitkas);
  console.log(allUsButsalgagches.data[0].attributes.name);
  return (
    <Layout>
      <Head>
        <title>Бараа Материал Бүртгэл {CMS_NAME}</title>
      </Head>
      <Container>
        <MainMenu setMenu={setMenu} />
        {menu === "us butsalgagch" && (
          <CategoriesList data={allUsButsalgagches} listName={menu} />
        )}
        {menu === "plitka" && <CategoriesList data={allPlitkas} />}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPlitkas = (await getAllPlitkas(preview)) || [];
  const allUsButsalgagches = (await getAllUsButsalgagches(preview)) || [];
  console.log("==========+>", allUsButsalgagches);
  return {
    props: { allUsButsalgagches, allPlitkas, preview },
  };
}
