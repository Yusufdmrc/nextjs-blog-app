"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Ana sayfa",
      path: "/",
    },
    {
      title: "Hakkımda",
      path: "/about",
    },
    {
      title: "İletişim",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Yönetici", path: "/admin" }} />}
          <button className={styles.logout}>Çıkış</button>
        </>
      ) : (
        <NavLink item={{ title: "Giriş", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
