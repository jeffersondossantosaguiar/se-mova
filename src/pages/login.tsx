import Head from 'next/head'

import styles from '../styles/pages/Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="bg.png" alt="Backgroud" />
      </div>
      <div className={styles.content}>
        <Head>
          <title>Login</title>
        </Head>
        <img src="logo.svg" alt="Logo" />
        <h1>Bem-vindo</h1>
        <p>Faça login com seu Github para começar</p>
      </div>
    </div>
  )
}