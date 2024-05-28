import PostCard from "../../components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "../../lib/data";

//Fetch data with an api
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Bir şeyler yanlış gitti");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  //Fetch data with an api
  // const posts = await getData();
  //Fetch data without an api
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
