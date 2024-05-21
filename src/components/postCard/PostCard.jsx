import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        {/* <span className={styles.date}>01.01.2024</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Typescript</h1>
        <p className={styles.desc}>
          TypeScript, Microsoft tarafından geliştirilen ve JavaScripte ek
          özellikler kazandıran açık kaynaklı bir programlama dilidir.
          TypeScript, JavaScriptin üst kümesi olarak tasarlanmıştır ve
          JavaScript kodunu genişleterek daha güçlü ve hata yönetimi daha iyi
          olan bir dil sağlar. TypeScript, JavaScriptin tüm yeteneklerine
          sahiptir ve ek olarak statik tip denetimi, modern özellikler ve
          geliştirilmiş IDE desteği gibi avantajlar sunar.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Daha fazlasını oku
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
