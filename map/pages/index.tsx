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
      <main className={styles.main}>
        <div flex justify-center items-center pt-16>
          <h1 className="text-4xl font-bold text-purple-900 sm:text-6xl">
            🔍 Open Tallahassee
          </h1>
        </div>
        <div className={styles.grid}>
          <a href="/dailey" className={styles.card}>
            <h2>Politician Profiles &rarr;</h2>
            <p>Find in-depth information about local politicians.</p>
          </a>

          <a href="/vision-zero" className={styles.card}>
            <h2>Vision Zero &rarr;</h2>
            <p>Advocating for safe, 🚶🏾‍♀️, 🚲 streets. </p>
          </a>
        </div>


      </main>

      <footer className={styles.footer}>
        <div flex justify-center items-center pt-16>
          made with by <a href="/about">Open Tallahassee</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
