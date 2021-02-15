import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import { SocialList } from "../components/SocialList";
import styles from "./homepage.module.scss";

export default function Index() {
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
