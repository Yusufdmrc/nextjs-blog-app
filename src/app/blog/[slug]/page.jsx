import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "../../../components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "../../../lib/data";

//Fetch Data with an api
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Bir şeyler yanlış gitti");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //Fetch data with an api
  const post = await getData(slug);
  //Fetch data without an api
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Yükleniyor...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Yayınlandı</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
