import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import { kadwa } from "@/utils/font";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setTimeout(() => {
      setMenu(!menu);
    }, 500);
  };

  return (
    <>
      <div className={style.nav}>
        <div className={style.logo}>
          <Image
            width={100}
            height={80}
            src="/image/Govind Hand Print.png"
            alt="Govind hand print akola chittorgarh rajasthan"
          />
        </div>
        <div className={`${style.contents} ${kadwa.className}`}>
          <Link className={style.link} href="#">
            Home
          </Link>
          <Link className={style.link} href="#">
            Image Gallary
          </Link>
          <Link className={style.link} href="#">
            Education
          </Link>
          <Link className={style.link} href="#">
            Awards
          </Link>
          <Link className={style.link} href="#">
            Contact Us
          </Link>
        </div>
      </div>
      <div className={style.navM}>
        <Image
          src="/image/Home icon.svg"
          alt="Home"
          width={50}
          height={40}
        ></Image>
        {!menu ? (
          <Image
            src="/image/Hemberger.svg"
            alt="Menu"
            width={45}
            height={35}
            onClick={menuHandler}
            className={style.rotate}
          ></Image>
        ) : (
          <Image
            src="/image/Close.svg"
            alt="close"
            width={32}
            height={36}
            onClick={menuHandler}
            className={style.close}
          ></Image>
        )}
      </div>
      {menu && (
        <div className={`${style.menu} ${kadwa.className}`}>
          <div className={style.card}>
            <Link className={style.link} href="#">
              Home
            </Link>
            <br />
            <Link className={style.link} href="#">
              Image Gallary
            </Link>
            <br />
            <Link className={style.link} href="#">
              Education
            </Link>
            <br />
            <Link className={style.link} href="#">
              Awards
            </Link>
            <br />
            <Link className={style.link} href="#">
              Contact Us
            </Link>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
