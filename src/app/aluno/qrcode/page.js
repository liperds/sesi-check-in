"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";
import Button from "../../../components/Button/index";
import Header from "../../../components/Header/index";
import logo from "../../../assets/iel-ceara.svg";
import { useState, useEffect} from "react";
import { useZxing } from "react-zxing";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function Qrcode() {
  const [result, setResult] = useState("");
  const router = useRouter();
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });
  
  useEffect(() => {
    if ((result !="")) {
      router.push('/aluno/success')
    }
  }, [result]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/aluno/inicio">
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
        <div className="cardQR">
          <video ref={ref} />
        </div>
      </div>

      <div className={styles.grid}>
      <a href="/aluno/inicio" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
          Início<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Veja sua Frequência.</p>
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
