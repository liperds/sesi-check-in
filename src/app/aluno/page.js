"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../page.module.css";
import logo from "../../assets/iel-ceara.svg";


const inter = Inter({ subsets: ["latin"] });

export default function Inicio() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/inicio">
          <Image
            className={styles.logo}
            src={logo}
            alt="Logo IEL"
            width={180}
            height={70}
            priority
          />
        </a>
      </div>

      <div className={styles.center}>
      <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner">
          
          
          </div>
       </div>   
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  );
}
