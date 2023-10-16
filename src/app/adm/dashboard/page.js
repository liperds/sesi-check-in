import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../page.module.css";
import logo from "../../../assets/iel-ceara.svg";
import qrcode from "../../../assets/qrcode.png";




const inter = Inter({ subsets: ["latin"] });

let userCrp = {
  username:"crp",
	password:"@#Crp2022!@"
}


//fetch('https://apilojaiel.sfiec.org.br', {
//  method: "POST",
//  body: JSON.stringify(user),
//  headers: {"Content-Type": "application/json; charset=UTF-8"}
//})

//const response = await fetch('https://apilojaiel.sfiec.org.br/auth/login', {
//      method: "POST",
//      body: JSON.stringify(userCrp),
//      headers: {"Content-Type": "application/json; charset=UTF-8"}
//    })
//const user = await response.json()


async function postAPI() {
  const response = await fetch('https://apilojaiel.sfiec.org.br/auth/login', {
    method: "POST",
    body: JSON.stringify(userCrp),
    headers: {"Content-Type": "application/json; charset=UTF-8"},
    next: {
      revalidate: 10
    }
  })
  return await response.json();
}





// async function getAPI() {
//   const response = await fetch('https://apilojaiel.sfiec.org.br/ofertas', {
//     method: "GET",
//     headers: { Authentication: `Bearer ${postAPI.access_token}`}
//   })
//   return response.json();
// }

export default async function Dashbord() {

  const data = await postAPI();

  var bearer = 'Bearer ' + data.access_token;
  

  
   const response = await fetch('https://apilojaiel.sfiec.org.br/vagas/1173',
   {
      method: "GET",
      withCredentials: true,
      credentials: 'include',
      headers: { 'Authentication': bearer,
      //"Content-Type": "application/json; charset=UTF-8"
    },
    next: {
      revalidate: 1
    }
    });
  const data2 = await response.json();  
  //const data2 = await getAPI();

  console.log(data)
  console.log(bearer)
  console.log(JSON.stringify(data2, null, 2))


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
         
          <div>
            <p className="nome-aluno">Olá ADM...! {JSON.stringify(data2, null, 2)} </p>
            <p className="nome-aluno">Olá ADM...! {JSON.stringify(data, null, 2)} </p>
          </div>
          
          </div>
       </div>   
      </div>

      <div className={styles.grid}>
      <a href="/adm/gqrcode" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
           Gerar QR<span>-&gt;</span>
          </h2>
          <p className={inter.className}>Criar outro QR.</p>
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
