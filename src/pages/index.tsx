import { GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import { MissionProps } from "../components/Mission/Mission";
import Mission from "../components/Mission";
import { gePageData } from "../lib/pages";
import styles from "./homepage.module.scss";
import Value, { ValueProps } from "../components/Value/Value";
import Link from "next/link";

type Props = {
  hero_title: string;
  mission: MissionProps;
  value: ValueProps;
};

export default function Index({ hero_title, mission, value }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <div className={styles.container}>
        <div>
          <h1>{hero_title}</h1>
        </div>
      </div>
      <Mission {...mission} />
      <Value {...value} />
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log(locale);
  const data = gePageData("homepage");
  const mission = gePageData("mission")[locale];
  const value = gePageData("value")[locale];

  const { hero_title } = data[locale];
  return {
    props: {
      hero_title,
      mission,
      value,
    },
  };
};
