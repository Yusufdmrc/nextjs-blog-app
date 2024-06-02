"use client";

import { addUser } from "../../lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Yeni kullanıcı oluşturma</h1>
      <input type="text" name="username" placeholder="Kullanıcı Adı" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Şifre" />
      <input type="text" name="img" placeholder="Resim" />
      <select name="isAdmin">
        <option value="false">Yönetici mi?</option>
        <option value="false">Hayır</option>
        <option value="true">Evet</option>
      </select>
      <button>Oluştur</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;
