import { GetServerSideProps } from 'next'

import { signIn, signOut, useSession } from 'next-auth/client'

import Layout from '../components/Layout'
import Login from './api/auth/login'
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { ChallengerBox } from "../components/ChallengerBox"

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from "../contexts/ChallengesContext"

import styles from "../styles/pages/Home.module.css"

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}


export default function Home(props: HomeProps) {
  const [session, loading] = useSession()

  if (loading) {
    <p>carregando</p>
  }

  return (
    <>
      {!session &&
        <>
          <Login />
        </>}
      {session && <>
        <Layout>
          <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
          >
            <div className={styles.container}>
              <ExperienceBar />

              <CountdownProvider>
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
              </CountdownProvider>
            </div>
          </ChallengesProvider>
        </Layout>
      </>}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}