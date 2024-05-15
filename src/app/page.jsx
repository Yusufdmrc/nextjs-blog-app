import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          ad sit repellat tenetur labore eum architecto soluta quo ipsa ullam!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Daha fazlası</button>
          <button className={styles.button}>İletişim</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
