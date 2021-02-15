import React from "react";
import BasicMeta from "../../components/meta/BasicMeta";
import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { gePageData } from "../../lib/pages";

type Props = {
  title: string;
  intro: string;
};

export default function Index({ title, intro }: Props) {
  const url = "/about";

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      {intro}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = gePageData("about");
  const { title, intro } = data.en;
  return {
    props: {
      title,
      intro,
    },
  };
};
