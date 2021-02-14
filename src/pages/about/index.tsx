import React from "react";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import Layout from "../../components/Layout";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { geAboutData } from "../../lib/posts";
import { GetStaticProps } from "next";
import { title } from "process";

type Props = {
  title: string;
  intro: string;
};

export default function Index({ title, intro }: Props) {
  const url = "/about";

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
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
