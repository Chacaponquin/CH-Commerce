import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileContext from "../../src/context/ProfileContext";
import styles from "../../styles/signIn.module.css";
import Head from "next/head";
import LoadingContext from "../../src/context/LoadingContext";
import Loading from "../../components/Loading/Loading";

const SignIn = () => {
  let router = useRouter();
  const { profile, setProfile } = useContext(ProfileContext);
  const [signInError, setSignInError] = useState(null);
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
    if (data.picture.length === 0) {
      try {
        data.picture = "";

        let res = await axios.post(`${process.env.API_URL}/signIn`, data);

        if (res.data.message) {
          setProfile(res.data.message);

          router.push("/home");
        }
      } catch (error) {
        setSignInError("Hubo un error");

        setTimeout(() => {
          setSignInError(null);
        }, 3000);
      }
    } else {
      try {
        let picture = data.picture[0];

        let newData = new FormData();
        newData.append("picture", picture);
        newData.append("username", data.username);
        newData.append("email", data.email);
        newData.append("password", data.password);

        let res = await axios.post(`${process.env.API_URL}/signIn`, newData);

        if (res.data.message) {
          setProfile(res.data.message);

          router.push("/home");
        }
      } catch (error) {
        setSignInError("Hubo un error");

        setTimeout(() => {
          setSignInError(null);
        }, 3000);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.signInContainer}>
            <div
              className={`${styles.greenSection} ${
                signInError ||
                errors.username ||
                errors.email ||
                errors.password
                  ? styles.signIn_Error
                  : ""
              }`}
            ></div>
            <div className={styles.whiteSection}></div>
            <div className={styles.eCommerce_login_container}>
              <div className={styles.eCommerce_login_card}>
                <div className={styles.noSpace}></div>
                <div className={styles.login_form_container}>
                  <form
                    className={styles.signIn_form}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h1
                      className={`${
                        signInError ? styles.signIn_error_message : ""
                      }`}
                    >
                      {signInError ? signInError : "Sign In"}
                    </h1>
                    <div className={styles.signIn_input_section}>
                      <label>Username</label>
                      <input
                        {...register("username", {
                          required: true,
                          maxLength: 15,
                        })}
                        type="text"
                        placeholder="Enter your Username"
                        spellCheck="false"
                        className={errors.username && styles.signIn_Error}
                      />
                    </div>
                    <div className={styles.signIn_input_section}>
                      <label>Email</label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Enter your Email"
                        spellCheck="false"
                        className={errors.email && styles.signIn_Error}
                      />
                    </div>
                    <div className={styles.signIn_input_section}>
                      <label>Password</label>
                      <input
                        {...register("password", {
                          required: true,
                          maxLength: 15,
                        })}
                        type="password"
                        placeholder="Enter your Password"
                        className={errors.password && styles.signIn_Error}
                      />
                    </div>
                    <div className={styles.signIn_file_section}>
                      <label>Image</label>
                      <input
                        type="file"
                        {...register("picture")}
                        accept="image/*"
                      />
                    </div>
                    <p onClick={() => router.push("/login")}>
                      Already have an acount?
                    </p>
                    <input
                      type="submit"
                      value="Sign In"
                      className={`${
                        signInError ||
                        errors.username ||
                        errors.email ||
                        errors.password
                          ? styles.signIn_Error
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

export default SignIn;
