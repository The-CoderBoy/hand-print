import React from "react";
import Image from "next/image";
import style from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Image
          width={100}
          height={80}
          src="/image/Govind Hand Print.png"
          alt="Govind hand print akola chittorgarh rajasthan"
        />
      </div>
    </div>
  );
}

export default Navbar;
