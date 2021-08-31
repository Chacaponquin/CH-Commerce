import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect } from "react";
import About from "../../components/Home/About";
import HomeCards from "../../components/Home/HomeCards";
import NavBar from "../../components/Home/NavBar";
import User from "../../components/Home/User";
import CarReducerContext from "../../src/context/CarReducerContext";
import ProfileContext from "../../src/context/ProfileContext";
import style from "../../styles/home.module.css";
import Loading from "../../components/Loading/Loading";
import LoadingContext from "../../src/context/LoadingContext";

export default function Home({ products }) {
  let router = useRouter();
  const { profile } = useContext(ProfileContext);
  const { dispatch } = useContext(CarReducerContext);
  const { loading } = useContext(LoadingContext);

  useEffect(() => {
    if (!profile) {
      router.replace("/login");
    }
  }, [profile]);

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.homeContainer}>
            <NavBar />
            <HomeCards products={products} />
            <User profile={profile} dispatch={dispatch} />
            <About />
          </div>

          <style jsx global>{`
            #eCommerce_home_container {
              display: grid;
              grid-template-columns: 80% 20%;
              width: 100%;
              height: 90vh;
            }

            #eCommerce_user_section {
              display: grid;
              grid-template-columns: 50% 50%;
              width: 100%;
              height: 100vh;
            }

            #eCommerce_about_section {
              display: grid;
              grid-template-columns: 50% 50%;
              width: 100%;
              height: 100vh;
            }
          `}</style>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  let { data } = await axios.get(`${process.env.API_URL}/allProducts`);

  return {
    props: { products: data.message },
  };
}
