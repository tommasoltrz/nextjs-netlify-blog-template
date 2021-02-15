import React from "react";
import BasicMeta from "../../components/meta/BasicMeta";
import Layout from "../../components/Layout";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { geAboutData } from "../../lib/pages";

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
  const data = geAboutData();
  const { title, intro } = data;
  return {
    props: {
      title,
      intro,
    },
  };
};
