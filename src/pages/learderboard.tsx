import styles from '../styles/pages/Learderboard.module.css'

import { Layout } from "../components/Layout"

export default function Learderboard() {
  const users = [
    {
      position: 1,
      user: "Jefferson",
      user_level: 59,
      user_avatar: "https://github.com/jeffersondossantosaguiar.png",
      challenges: 130,
      exp: 159000
    }
  ]

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Learderboard</h1>
      </div>
    </Layout>
  )
}