import LoginForm from "../../../components/loginForm/LoginForm";
import { auth, signIn } from "../../../lib/auth";
import styles from "./login.module.css";

const LoginPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
