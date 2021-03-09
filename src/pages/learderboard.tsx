import styles from '../styles/pages/Learderboard.module.css'

import Layout from "../components/Layout"
import { UsersTable } from '../components/UsersTable'

export default function Learderboard() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Learderboard</h1>
        <UsersTable />
      </div>
    </Layout>
  )
}