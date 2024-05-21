import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({ params }) => {
  console.log(params);
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
        <h1 className={styles.title}>Typescript</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Yazar</span>
            <span className={styles.detailValue}>Yusuf Demirci</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Yayınlandı</span>
            <span className={styles.detailValue}>18.05.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          TypeScript, Microsoft tarafından geliştirilen ve JavaScripte ek
          özellikler kazandıran açık kaynaklı bir programlama dilidir.
          TypeScript, JavaScriptin üst kümesi olarak tasarlanmıştır ve
          JavaScript kodunu genişleterek daha güçlü ve hata yönetimi daha iyi
          olan bir dil sağlar. TypeScript, JavaScriptin tüm yeteneklerine
          sahiptir ve ek olarak statik tip denetimi, modern özellikler ve
          geliştirilmiş IDE desteği gibi avantajlar sunar.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
