import { getUser } from "../../lib/data";
import styles from "./postUser.module.css";

//Fetch data with an api
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Bir şeyler yanlış gitti");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //Fetch data with an api
  //   const user = await getData(userId);
  //Fetch data without an api
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <span className={styles.detailTitle}>Yazar</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
  );
};

export default PostUser;
