import Head from "next/head";
import { useRef } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./mylayout.module.scss";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const myRef = useRef(null);
  const executeScroll = () => {
    console.log(myRef);
  };
  const onNavElClicked = (idx: number) => {
    console.log(idx);
    console.log(myRef.current.children);
    myRef.current.children[2].scrollIntoView();
  };
  return (
    <div className={styles.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation handleElClick={onNavElClicked} />
      </nav>
      <main ref={myRef}>{children}</main>
    </div>
  );
}
