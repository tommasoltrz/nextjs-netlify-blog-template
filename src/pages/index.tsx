import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import { SocialList } from "../components/SocialList";
import { gePageData } from "../lib/pages";
import styles from "./homepage.module.scss";

type Props = {
  hero_title: string;
};

export default function Index({ hero_title }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <div className={styles.container}>
        <div>
          <h1>{hero_title}</h1>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = gePageData("homepage");
  const mission = gePageData("mission");
  console.log(data);
  const { hero_title } = data.en;
  return {
    props: {
      hero_title,
    },
  };
};
