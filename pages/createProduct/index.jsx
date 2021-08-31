import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileContext from "../../src/context/ProfileContext";
import styles from "../../styles/newArticle.module.css";
import Head from "next/head";
import LoadingContext from "../../src/context/LoadingContext";
import Loading from "../../components/Loading/Loading";

const CreatePost = () => {
  const { profile, setProfile } = useContext(ProfileContext);
  const { loading } = useContext(LoadingContext);
  let router = useRouter();
  const [createProductError, setCreateProductError] = useState(null);

  useEffect(() => {
    if (!profile) {
      router.replace("/login");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let picture = data.picture[0];
      data.picture = picture;

      let newData = new FormData();
      newData.append("picture", picture);
      newData.append("name", data.name);
      newData.append("price", data.price);
      newData.append("description", data.description);
      newData.append("creator", profile.id);
      newData.append("contact", profile.email);

      let res = await axios.post(`${process.env.API_URL}/newProduct`, newData);
      setProfile(res.data.message);

      router.push("/home");
    } catch (error) {
      setCreateProductError("Hubo un error");

      setTimeout(() => {
        setCreateProductError(null);
      }, 3000);
    }
  };

  return (
    <>
      <Head>
        <title>CreateProduct</title>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.createPostContainer}>
            <div className={styles.whiteSection}></div>
            <div
              className={`${styles.greenSection} ${
                createProductError ||
                errors.name ||
                errors.description ||
                errors.price ||
                errors.picture
                  ? styles.createProductError
                  : ""
              }`}
            ></div>
            <div className={styles.eCommerce_login_container}>
              <div className={styles.eCommerce_login_card}>
                <div className={styles.login_form_container}>
                  <form
                    className={styles.newProduct_form}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h1
                      className={
                        createProductError && styles.createProduct_message
                      }
                    >
                      {createProductError ? createProductError : "New Product"}
                    </h1>
                    <div className={styles.newProduct_input_section}>
                      <label>Name</label>
                      <input
                        type="text"
                        {...register("name", { required: true, maxLength: 20 })}
                        placeholder="Enter Product Name"
                        autoComplete="off"
                        spellCheck="false"
                        className={errors.name && styles.createProductError}
                      />
                    </div>
                    <div className={styles.newProduct_price_section}>
                      <div>
                        <label>Price</label>
                        <input
                          type="number"
                          placeholder="$88"
                          {...register("price", {
                            required: true,
                            maxLength: 3,
                          })}
                          className={errors.price && styles.createProductError}
                        />
                      </div>
                      <div>
                        <label>Image</label>
                        <input
                          type="file"
                          {...register("picture", { required: true })}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Enter Product Description"
                      {...register("description", {
                        required: true,
                        maxLength: 1000,
                      })}
                      spellCheck="false"
                      className={
                        errors.description && styles.createProductError
                      }
                    ></textarea>
                    <input
                      type="submit"
                      value="Create"
                      className={`${
                        createProductError ||
                        errors.name ||
                        errors.description ||
                        errors.price ||
                        errors.picture
                          ? styles.createProductError
                          : ""
                      }`}
                    />
                  </form>
                </div>
                <div className={styles.noSpace}></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreatePost;
