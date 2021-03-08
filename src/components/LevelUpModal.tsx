import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { FaTwitter } from 'react-icons/fa'

import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
      <button className={styles.twitterButton}>
        <p>Compartilhar no Twitter</p>
        <FaTwitter className={styles.twitterIcon} />
      </button>
    </div>
  )
}