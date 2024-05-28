import Image from "next/image";
import styles from "./singlePost.module.css";
import { PostUser } from "../../../components//postUser/postUser";
import { Suspense } from "react";
import { getPost } from "../../../lib/data";

//Fetch Data with an api
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Bir şeyler yanlış gitti");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //Fetch data with an api
  // const post = await getData(slug);
  //Fetch data without an api
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          {post && (
            <Suspense fallback={<div>Yükleniyor...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Yayınlandı</span>
            <span className={styles.detailValue}>18.05.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
