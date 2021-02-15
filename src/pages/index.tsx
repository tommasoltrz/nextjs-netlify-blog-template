import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import { SocialList } from "../components/SocialList";
import { gePageData } from "../lib/pages";
import styles from "./homepage.module.scss";

type Props = {
  herotitle: string;
};

export default function Index() {
  // console.log(herotitle);
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <div className={styles.container}>
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className={styles.fancy}>.</span>
          </h1>
          <span className={styles.handle}>@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const data = gePageData("homepage");
//   const { herotitle } = data.en;
//   return {
//     props: {
//       herotitle,
//     },
//   };
// };
