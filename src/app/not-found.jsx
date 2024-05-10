import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Bulunamadı</h2>
      <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
      <Link href="/">Ana sayfaya dön</Link>
    </div>
  );
};

export default NotFound;
