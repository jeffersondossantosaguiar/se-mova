import Head from 'next/head'
import { signIn } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa'

import styles from '../../../styles/pages/Login.module.css'

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
        <div className={styles.gitContainer}>
          <h1>Bem-vindo</h1>
          <div className={styles.gitDescription}>
            {/* <FaGithub className={styles.gitIcon} /> */}
            <p>Faça login para começar</p>
          </div>
          <button
            type="button"
            className={styles.gitAuthButton}
            onClick={() => signIn()}>
            <FaGithub className={styles.gitIconButton} />
              Login com Github
          </button>
        </div>
      </div>
    </div>
  )
}