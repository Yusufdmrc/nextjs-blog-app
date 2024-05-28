"use client";

import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact2.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="İsim ve Soyisim" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Telefon numarası(opsiyonel)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Mesaj"
          ></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
