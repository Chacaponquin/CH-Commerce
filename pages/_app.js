import "../styles/globalStyles.css";
import { CarReducerProvider } from "../src/context/CarReducerContext";
import { ProfileProvider } from "../src/context/ProfileContext";
import { LoadingProvider } from "../src/context/LoadingContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-favicon.ico" />
      </Head>
      <LoadingProvider>
        <ProfileProvider>
          <CarReducerProvider>
            <Component {...pageProps} />
          </CarReducerProvider>
        </ProfileProvider>
      </LoadingProvider>
    </>
  );
}

export default MyApp;
