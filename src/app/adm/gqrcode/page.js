"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";
import logo from "../../../assets/iel-ceara.svg";
import qrcode from "../../../assets/qrcode.png";
import { useState } from "react";
import {QRCodeSVG} from 'qrcode.react';


const inter = Inter({ subsets: ["latin"] });


export default function Dashbord() {

  const [qrcode, setQrcode] = useState("Digite A infomação do Qr aqui");
  const [qrcodeS, setQrcodeS] = useState("");

  const onChangeHandler = event => {
    setQrcode(event.target.value);
 };
 const onChangeHandlerS = event => {
  setQrcodeS(event.target.value);
};

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/adm/dashboard">
          <Image
            className={styles.logo}
            src={logo}
            alt="Next.js Logo"
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

          <select className="input" name="turmas" id="cars" 
          defaultValue={qrcodeS}
          onChange={onChangeHandlerS}
          >
           <option value="Turma 01">Turma 01</option>
           <option value="Turma 02">Turma 02</option>
           <option value="Turma 03">Turma 03</option>
           <option value="Turma 04">Turma 04</option>
         </select>

            
          <input
              className="input"
              type="text"
              name="qrcode"
              onChange={onChangeHandler}
              value={qrcode}
             />
         
          <QRCodeSVG
             value={`${qrcode} ${qrcodeS}`}
             size={300}
             bgColor={"#ffffff"}
             fgColor={"#0055a5"}
             level={"L"}
             includeMargin={false}
             imageSettings={{
             src: "https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/314227736_5712038308834207_466746309206363279_n.jpg?stp=cp0_dst-jpg_e15_p206x206_q65&_nc_cat=103&ccb=1-7&_nc_sid=85a577&_nc_ohc=XsR74D2b-yYAX_-DcBQ&_nc_ht=scontent-for1-1.xx&oh=00_AfBoUpq53wFrZlNdn3ztcI3EsBfSK3gzOeufj9q1E37X6g&oe=646850EF",
             x: undefined,
             y: undefined,
             height: 50,
             width: 50,
             excavate: true,
            }}
           />
          
          </div>
       </div>   
      </div>

      <div className={styles.grid}>
      <a href="/adm/dashboard" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
          Início<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Voltar ao Início.</p>
        </a>
        <a href="/adm" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Sair<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Finalizar sessão.</p>
        </a>
      </div>
    </main>
  );
}
