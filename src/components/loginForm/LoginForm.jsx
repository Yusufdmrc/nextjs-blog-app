import styles from "./loginForm.module.css";
import { handleGithubLogin } from "../../lib/action";

import Link from "next/link";

const LoginForm = () => {
  return (
    <form action={handleGithubLogin} className={styles.form}>
      <input type="text" placeholder="Kullanıcı Adı" name="username" />
      <input type="password" placeholder="Şifre" name="password" />
      <button>Giriş Yap</button>

      <Link href="/register">
        {"Hesabın yok mu?"} <b>Kayıt Ol</b>
      </Link>
    </form>
  );
};

export default LoginForm;
