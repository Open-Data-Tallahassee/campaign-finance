import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Open Tallahassee</title>
        <meta name="description" content="community news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* main section */}
      <div className="mt-10 text-center text-2xl font-bold text-slate-900 sm:text-2xl sm:mt-10 sm:text-center">🔍 Open Tallahassee's Campaign Finance Explorer</div>
      <div className="mt-10 text-center text-2xl font-bold text-slate-900 sm:text-2xl sm:mt-10 sm:text-center">Candidates: 
        <a href="/dailey"> John Dailey</a>
      </div>

      {/* footer */}
      <footer className={styles.footer}>
        Built by <a href="https://www.shelbygn.com">Shelby Green</a>. This is a proof of concept for <a href="https://www.opentlh.com">Open Tallahassee</a>. Have suggestions or feedback? <a href="mailto:opentlh@gmail.com">Email us</a>.
      </footer>
    </div>
  )
}

export default Home
