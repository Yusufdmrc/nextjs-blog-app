"use client";

import { register } from "../../lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Kullancı Adı" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Şifre" name="password" />
      <input
        type="password"
        placeholder="Şifreyi yeniden giriniz"
        name="passwordRepeat"
      />
      <button>Kayıt Ol</button>
      {state?.error}
      <Link href="/login">
        Hesabın var mı? <b>Giriş Yap</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
