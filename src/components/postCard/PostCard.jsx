import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-kent-sehir-kent-simgesi-gorulecek-yer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Başlık</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quaerat quibusdam corrupti, saepe quasi nobis adipisci temporibus in
          rem aliquam.
        </p>
        <Link href="/blog/post" className={styles.link}>
          Daha fazlasını oku
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
