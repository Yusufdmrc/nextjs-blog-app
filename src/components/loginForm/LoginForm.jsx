"use client";

import styles from "./loginForm.module.css";
import { login } from "../../lib/action";
import { useFormState } from "react-dom";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Kullanıcı Adı" name="username" />
      <input type="password" placeholder="Şifre" name="password" />
      <button>Giriş Yap</button>
      {state?.error}
      <Link href="/register">
        {"Hesabın yok mu?"} <b>Kayıt Ol</b>
      </Link>
    </form>
  );
};

export default LoginForm;
