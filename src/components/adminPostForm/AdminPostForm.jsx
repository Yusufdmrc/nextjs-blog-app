"use client";

import { addPost } from "../../lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Yeni Gönderi Oluşturma</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Başlık" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="Resim" />
      <textarea type="text" name="desc" placeholder="Açıklama" rows={10} />
      <button>Oluştur</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
