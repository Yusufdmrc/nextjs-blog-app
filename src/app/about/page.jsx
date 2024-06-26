import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Next Blog About Page",
  description: "About Description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hakkımda</h1>
        <p className={styles.desc}>
          Doğuş Üniversitesi yazılım mühendisliği son sınıf öğrenciyim.Aynı
          zamanda bir yazılım şirketinde frontend web ve mobil uygulama
          geliştirme alanında çalışıyorum.
          <br />
          <br />
          Typescript ve React kullanarak projeler yapıyorum. Ayrıca Next.js
          öğreniyorum ve ileride full-stack developer olmak istiyorum.Backend
          alanında ise C# programlama dilini ve ASP.NET MVC Frameworkü temel
          düzeyde biliyorum.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Javascript</h1>
            <p>Orta Düzey</p>
          </div>
          <div className={styles.box}>
            <h1>React</h1>
            <p>Orta Düzey</p>
          </div>
          <div className={styles.box}>
            <h1>Next.js</h1>
            <p>Orta Düzey</p>
          </div>
          <div className={styles.box}>
            <h1>Css</h1>
            <p>Orta Düzey</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about7.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
