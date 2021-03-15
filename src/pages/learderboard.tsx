import { useSession } from 'next-auth/client'


import styles from '../styles/pages/Learderboard.module.css'

import Login from '../pages/api/auth/login'
import Layout from "../components/Layout"
import { UsersTable } from '../components/UsersTable'

export default function Learderboard() {
  const [session, loading] = useSession()

  if (!session) {
    return (
      <Login />
    )
  }
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Learderboard</h1>
        <UsersTable />
      </div>
    </Layout>
  )
}