import { SideBar } from './SideBar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>se.mova</title>
      </Head>
      <SideBar />
      <main>
        <div className="Content">{children}</div>
      </main>
    </>
  )
}