"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const [open, setOpen] = useState(false);
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
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Yönetici", path: "/admin" }} />
            )}
            <button className={styles.logout}>Çıkış</button>
          </>
        ) : (
          <NavLink item={{ title: "Giriş", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menü
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
