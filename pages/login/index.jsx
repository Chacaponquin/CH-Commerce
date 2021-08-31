import React, { useContext, useState } from "react";
import styles from "../../styles/login.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import ProfileContext from "../../src/context/ProfileContext";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import LoadingContext from "../../src/context/LoadingContext";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  let router = useRouter();
  const { profile, setProfile } = useContext(ProfileContext);
  const [loginError, setLoginError] = useState(null);
  const { loading } = useContext(LoadingContext);

  if (profile) {
    router.replace("/home");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let res = await axios.get(
        `${process.env.API_URL}/login/${data.username}/${data.password}`
      );

      if (res.data.message) {
        localStorage.setItem(
          "profile",
          JSON.stringify({
            username: res.data.message.username,
            id: res.data.message.id,
          })
        );

        setProfile(res.data.message);
      } else {
        setLoginError(res.data.error);

        setTimeout(() => {
          setLoginError(null);
        }, 3000);
      }
    } catch (error) {
      setLoginError("Hubo un error");

      setTimeout(() => {
        setLoginError(null);
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.loginContainer}>
            <div
              className={`${styles.greenSection} ${
                loginError || errors.password || errors.username
                  ? styles.loginError
                  : ""
              }`}
            ></div>
            <div className={styles.whiteSection}></div>
            <div className={styles.eCommerce_login_container}>
              <div className={styles.eCommerce_login_card}>
                <div className={styles.noSpace}></div>
                <div className={styles.login_form_container}>
                  <form
                    className={styles.login_form}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h1
                      className={`${
                        loginError ? styles.loginError_message : ""
                      }`}
                    >
                      {loginError || "Login"}
                    </h1>
                    <div className={styles.login_input_section}>
                      <label>Username</label>
                      <input
                        {...register("username", { required: true })}
                        type="text"
                        placeholder="Enter your Username"
                        spellCheck="false"
                        className={errors.username && styles.loginError}
                      />
                    </div>
                    <div className={styles.login_input_section}>
                      <label>Password</label>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Enter your Password"
                        className={errors.password && styles.loginError}
                      />
                    </div>
                    <p onClick={() => router.push("/signIn")}>Are you new?</p>
                    <input
                      type="submit"
                      value="Login"
                      className={`${
                        loginError || errors.password || errors.username
                          ? styles.loginError
                          : ""
                      }`}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
