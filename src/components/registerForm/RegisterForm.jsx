"use client";

import styles from "./registerForm.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Kullanıcı Adı" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Şifre" name="password" />
      <input
        type="password"
        placeholder="Şifreyi tekrar giriniz"
        name="passwordRepeat"
      />
      <button>Kayıt Ol</button>
      <Link href="/login">
        Hesabın var mı? <b>Giriş Yap</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
