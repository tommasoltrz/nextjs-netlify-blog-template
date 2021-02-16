import { GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import Mission, { MissionProps } from "../components/Mission/Mission";
import { gePageData } from "../lib/pages";
import styles from "./homepage.module.scss";
import Value, { ValueProps } from "../components/Value/Value";
import Link from "next/link";
import Hero, { HeroProps } from "../components/Hero/Hero";

type Props = {
  hero_title: string;
  hero: HeroProps;
  mission: MissionProps;
  value: ValueProps;
};

export default function Index({ hero_title, hero, mission, value }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      {/* <div className={styles.container}>
        <div>
          <h1>{hero_title}</h1>
        </div>
      </div> */}
      <Hero {...hero} />
      <Mission {...mission} />
      <Value {...value} />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = gePageData("homepage");
  const hero = gePageData("hero")[locale];
  const mission = gePageData("mission")[locale];
  const value = gePageData("value")[locale];

  const { hero_title } = data[locale];
  return {
    props: {
      hero_title,
      hero,
      mission,
      value,
    },
  };
};
