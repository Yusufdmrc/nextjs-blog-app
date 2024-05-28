import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Yazılım dünyasındaki yeniliklerle dolu bloguma hoş geldiniz!
        </h1>
        <p className={styles.desc}>
          Merhaba! Kişisel bloguma hoş geldiniz. Burada, günlük yaşamım,
          seyahatlerim, hobilerim ve yazılım sektörü hakkında yazılar
          paylaşıyorum. İlginizi çekecek içerikler bulacağınızı umuyorum.
          Keyifli okumalar!
        </p>
        <div className={styles.buttons}>
          <Link href="/blog">
            <button className={styles.button}>Daha fazlası</button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>İletişim</button>
          </Link>
        </div>
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero2.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
