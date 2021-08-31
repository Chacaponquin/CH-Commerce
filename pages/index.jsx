import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import ProfileContext from "../src/context/ProfileContext";

export default function Home() {
  const { profile } = useContext(ProfileContext);
  let router = useRouter();

  useEffect(() => {
    if (profile) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>E-Commerce</title>
      </Head>
    </>
  );
}
