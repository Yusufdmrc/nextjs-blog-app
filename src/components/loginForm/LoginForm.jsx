import styles from "./loginForm.module.css";

import Link from "next/link";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Kullanıcı Adı" name="username" />
      <input type="password" placeholder="Şifre" name="password" />
      <button>Login</button>

      <Link href="/register">
        {"Hesabın yok mu?"} <b>Kayıt Ol</b>
      </Link>
    </form>
  );
};

export default LoginForm;
