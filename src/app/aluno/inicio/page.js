"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";
import logo from "../../../assets/iel-ceara.svg";


const inter = Inter({ subsets: ["latin"] });

export default function Inicio() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/aluno/inicio">
          <Image
            className={styles.logo}
            src="https://logodownload.org/wp-content/uploads/2016/10/sesi-logo-9.png"
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
          <div>
            <h3 className="nome-aluno">Olá Aluno...!</h3>
            <p>Matricula: 2-000.899</p>
          </div>
          <div>
          <h4>Data: 10/05/2023</h4>
          <h2>Entrada: 10:00h</h2>
          <h2>Saída: 16:00h</h2>
          </div>
          
          </div>
       </div>   
      </div>

      <div className={styles.grid}>
      <a href="/aluno/qrcode" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
           Ler QR<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Registrar Frequência.</p>
        </a>
        <a href="/" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Sair<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Finalizar sessão.</p>
        </a>
      </div>
    </main>
  );
}
