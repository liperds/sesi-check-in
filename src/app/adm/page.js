"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../page.module.css";
import logo from "../../assets/iel-ceara.svg";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [cpfCnpj, setcpfCnpjValue] = useState("");

  const handleCpfCnpjChange = (event) => {
    // Get only the numbers from the data input
    let data = event.target.value.replace(/\D/g, "");
    // Checking data length to define if it is cpf or cnpj
    if (data.length > 11) {
      // It's cnpj
      let cnpj = `${data.substr(0, 2)}.${data.substr(2, 3)}.${data.substr(
        5,
        3
      )}/`;
      if (data.length > 12) {
        cnpj += `${data.substr(8, 4)}-${data.substr(12, 2)}`;
      } else {
        cnpj += data.substr(8);
      }
      data = cnpj;
    } else {
      // It's cpf
      let cpf = "";
      let parts = Math.ceil(data.length / 3);
      for (let i = 0; i < parts; i++) {
        if (i === 3) {
          cpf += `-${data.substr(i * 3)}`;
          break;
        }
        cpf += `${i !== 0 ? "." : ""}${data.substr(i * 3, 3)}`;
      }
      data = cpf;
    }
    setcpfCnpjValue(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/">
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
            <h1>Login / ADM</h1>
            <div className={styles.main1}>
              <input
                name="CPF"
                className="input"
                placeholder="CPF"
                value={cpfCnpj}
                onChange={(value) => handleCpfCnpjChange(value)}
                id="cpfCnpj"
                label="CPF or CNPJ"
                defaultValue={cpfCnpj}
                maxLength={14}
              />
              <input type="password" name="Senha" class="input" placeholder="Senha" />
              
            </div>
            <a className="cta" href="/adm/dashboard">
              <span>Entra</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.grid2}></div>
    </main>
  );
}
