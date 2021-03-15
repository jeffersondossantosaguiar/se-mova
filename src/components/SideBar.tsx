import Link from 'next/link'
import styles from '../styles/components/SideBar.module.css'
import { FiHome, FiAward } from 'react-icons/fi'
import { useRouter } from 'next/router'

import { signIn, signOut, useSession } from 'next-auth/client'

export function SideBar() {
  const router = useRouter()

  return (
    <div className={styles.sideBarContainer}>
      <img src="icons/logo.svg" alt="Logo" />
      <div className={styles.menuContainer}>
        <Link href="/">
          <div className={`${router.pathname === "/" ? styles.active : ""}`}>
            <FiHome className={styles.sideBarMenuIcons} />
          </div>
        </Link>
        <Link href="/learderboard">
          <div className={`${router.pathname === "/learderboard" ? styles.active : ""}`}>
            <FiAward className={styles.sideBarMenuIcons} />
          </div>
        </Link>

      </div>
      <button className={styles.logOutButton} onClick={() => signOut({ callbackUrl: '/login' })}>Sair</button>
    </div>
  )
}