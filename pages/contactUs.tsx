import Heading from "@/components/Heading";
import { useEffect, useState } from "react";
import style from "@/styles/ContactUs.module.css";
import { kadwa } from "@/utils/font";

function ContactUs() {
  const [height, setHeight] = useState("");
  useEffect(() => {
    console.log(window.innerHeight);
    setHeight((+window.innerHeight - 415).toString());
  }, []);

  return (
    <div className={style.contaner}>
      <Heading head="Contact Us" />
      <div className={`${style.contact} ${kadwa.className}`}>
        <div>
          Contact No.:-{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#907b0f",
            }}
            href="tel:+91-9571306863"
          >
            +91-9571306863
          </a>
          ,{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#907b0f",
            }}
            href="tel:+91-9929173370"
          >
            +91-9929173370
          </a>
        </div>
        <div>
          Address:- Jawahar Nagar, near the middle school in Akola, Chittorgarh,
          Rajasthan, Pin-Code:- 312205
        </div>
        <div>
          Email:-{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#907b0f",
            }}
            href="mailto:testMail@gmail.com"
          >
            testMail@gmail.com
          </a>
        </div>
      </div>
      <div style={{ height: `${height}px` }}></div>
    </div>
  );
}

export default ContactUs;
