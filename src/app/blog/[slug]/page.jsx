import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facere
          animi, nostrum quisquam velit maxime fuga expedita neque totam
          dignissimos tempora. Id modi mollitia porro? Sapiente debitis aperiam
          nisi. Quasi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
