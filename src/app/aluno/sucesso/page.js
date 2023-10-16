import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../page.module.css";
import logo from "../../assets/iel-ceara.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Success() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="/inicio">
          <Image
            className={styles.logo}
            src={logo}
            alt="Logo IEl"
            width={180}
            height={70}
            priority
          />
        </a>
      </div>

      <div className={styles.center3}>
        <div className="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="124"
            height="124"
            viewBox="0 0 124 124"
          >
            <circle
              className="circle-loading"
              cx="62"
              cy="62"
              r="59"
              fill="none"
              stroke="hsl(225, 63%, 50%)"
              stroke-width="6px"
            ></circle>
            <circle
              className="circle"
              cx="62"
              cy="62"
              r="59"
              fill="none"
              stroke="hsl(210, 63%, 50%)"
              stroke-width="6px"
              stroke-linecap="round"
            ></circle>
            <polyline
              className="check"
              points="73.56 48.63 57.88 72.69 49.38 62"
              fill="none"
              stroke="hsl(240, 63%, 50%)"
              stroke-width="6px"
              stroke-linecap="round"
            ></polyline>
          </svg>
        </div>
        <h2>Frequência realizada com Success!</h2>
      </div>

      <div className={styles.grid}>
        <a href="/inicio" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
          Início<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Veja sua Frequência.</p>
        </a>
        <a href="/qrcode" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
           Ler QR<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Registrar outra Frequência.</p>
        </a>
        <a href="/ajuda" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Ajuda<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Podemos Te ajudar.</p>
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
