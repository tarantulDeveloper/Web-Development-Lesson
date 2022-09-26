import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Contact.module.scss";
import Images from '../../data/images';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [textArea, setTextArea] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Contact Information</h2>
        <div className={styles.main}>
          <div className={styles.left}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fuga esse facere voluptatum dolorum dolorem necessitatibus sequi, perferendis blanditiis voluptas tempore delectus nostrum quisquam recusandae eaque iusto eius aut ullam.</p>
            <br />
            <h3>Where We Are</h3>
            <img src={Images.googleMap} alt="photo" />
            <br />
            <h3 style={{paddingTop: '10px'}}>Our Company</h3>
            <h4>Mailing Address</h4>
            <p>Bishkek, Chuy st. 102</p>
            <p>Lorem ipsum dolor sit, 345800</p>
            Lorem, ipsum dolor.
            <br /><br />
            Tel: 0909-909-909
            <br />
            Fax: 789890
          </div>

          <div className={styles.right}>
            <h3>Quick Format Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.myform}>
                Name:
                <input {...register("name")} />
              </div>
              <div className={styles.myform}>
                Email:
                <input {...register("email")} />
              </div>
              <div className={styles.myform}>
                Subject:
                <input {...register("subject")} />
              </div>
              <div className={styles.myform}>
                Message:
                <textarea {...register("message")} />
              </div>
              <div className={styles.buttons}>
                <button type="submit">Submit</button>
                <button
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
