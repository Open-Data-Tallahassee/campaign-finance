import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import pic from "../images/john-dailey.jpeg"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="p-1 flex flex-col min-h-screen">
    
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Map of John Dailey's campaign contributions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Link href="/">
        <div className=" mt-1 text-bold text-2xl text-green-900 text-left sm:text-lg sm:text-left sm:mt-1 ">Open Tallahassee</div>
      </Link>
      
      {/* top section */}
      <div>
        <div className=" group flex-wrap justify-center sm: group flex ">
          <div className=" flex mt-2 mb-2 mr-5 h-56 w-56 rounded-full border-2 border-slate-900 sm:w-56 sm:h-56 rounded-full border-b-2 border-slate-900">
            <Image className=" overflow-hidden rounded-full" alt="" src={pic} />
          </div>
          <div>
            <div className=" mt-5 text-4xl text-slate-900 text-center sm:text-4xl sm:text-left sm:mt-20">John Dailey</div>
            <div className=" text-xl text-slate-900 text-center sm: text-4xl sm:text-left">Currently: Mayor of Tallahassee</div>
            <div className=" text-xl text-slate-900 text-center sm: text-4xl sm:text-left">Running for re-election, against Kristin Dozier</div>
          </div>
        </div>
      <div className="text-lg text-center mt-10 text-grey-900 sm:text-4xl ">Raised $449,683.44 from 867 individual donors (as of 10/27/22):</div>
      </div>

      {/* middle section */}
      <div className=" mt-5 text-xl text-center sm: text-lg">
          <Map/> 
          {/* legend */}
          <div className="group flex sm: group flex-wrap">
            <div className="group flex items-center text-gray-600 dark:text-gray-400">Contribution Type:
              <span className="w-5 h-5 inline-block bg-sky-200 rounded-md m-2 text-md "></span>
              <span className="text-gray-600 dark:text-gray-400 ">Individual</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-sky-300 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">Business</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-sky-400 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">Self</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-sky-500 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">Political Committee</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-sky-600 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">Committee</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-gray rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">Other</span>
            </div>
          </div>
      </div>

    {/* footer */}
    <footer className={styles.footer}>
      Built by <Link href="https://www.shelbygn.com">Shelby Green</Link>. This is a proof of concept for <Link href="https://www.opentlh.com">Open Tallahassee</Link>. Methodology <Link href="https://github.com/Open-Data-Tallahassee/campaign-finance">here</Link>. Have suggestions or feedback? <Link href="mailto:opentlh@gmail.com">Email us</Link>.
    </footer>
    </div>
    </div>
  )
}

export default Home
