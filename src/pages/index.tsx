import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { ChallengerBox } from "../components/ChallengerBox"

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>    
      <Head>
        <title>Início | se.mova</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengerBox />
        </div>
      </section>
    </div>
  )
}
