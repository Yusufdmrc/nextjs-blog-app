"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "../../../lib/action";

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
    title: "Blog",
    path: "/blog",
  },
  {
    title: "İletişim",
    path: "/contact",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = false;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Yönetici", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Çıkış</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Giriş", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
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
