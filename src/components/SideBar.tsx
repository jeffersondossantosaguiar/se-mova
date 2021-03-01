import Link from 'next/link'
import styles from '../styles/components/SideBar.module.css'
import {FiHome, FiAward} from 'react-icons/fi'

export function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <img src="icons/logo.svg" alt="Logo"/>
      <div className={styles.menuContainer}>
        <ul>
          <li>
            <Link href="/">
              <FiHome className={styles.sideBarMenuIcons}/>
            </Link>
          </li>
          <li>
            <Link href="/learderboard">
              <FiAward className={styles.sideBarMenuIcons}/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}