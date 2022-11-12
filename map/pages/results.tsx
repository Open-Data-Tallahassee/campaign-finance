import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/results'
import Map2 from '../components/results-2.tsx'
import pic from "../images/john-dailey.jpeg"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div className="p-1 flex flex-col min-h-screen">
    
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Election Results Comparison" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      {/* <Link href="/">
        <div className=" mt-1 text-bold text-2xl text-green-900 text-left sm:text-lg sm:text-left sm:mt-1 ">Open Tallahassee</div>
      </Link> */}
      
      {/* top section */}
      <div>
        {/* <div className=" group flex-wrap justify-center sm: group flex ">
          <div className=" flex mt-2 mb-2 mr-5 h-56 w-56 rounded-full border-2 border-slate-900 sm:w-56 sm:h-56 rounded-full border-b-2 border-slate-900">
            <Image className=" overflow-hidden rounded-full" alt="" src={pic} />
          </div>
          <div>
            <div className=" mt-5 text-4xl text-slate-900 text-center sm:text-4xl sm:text-left sm:mt-20">John Dailey</div>
            <div className=" text-xl text-slate-900 text-center sm: text-4xl sm:text-left">Won re-election for Mayor of Tallahassee</div>
          </div>
        </div> */}
      <div className="text-lg text-center mt-5 text-grey-900 sm:text-3xl ">2018 vs 2022: Race Comparison</div>
      <div className="text-sm text-center mt-1 text-grey-900 sm:text-lg">Built by <Link href="https://www.shelbygn.com">Shelby Green</Link>. This is a proof of concept for <Link href="https://www.opentlh.com">Open Tallahassee</Link>.</div>
      </div>

      {/* middle section */}
      <div className=" mt-5 text-xl text-center sm: text-lg">
      <div id="popup">Select a precinct to display turnout details.</div>
        <div className="grid grid-cols-2">
            <div className="mr-5"><Map/></div>
            <div className="ml-5"><Map2/></div>
        </div>
          {/* legend */}
          <div className="group flex justify-center sm: group flex-wrap justify-center">
            <div className="group flex items-center text-gray-600 dark:text-gray-400">Voter Turnout:
              <span className="w-5 h-5 inline-block bg-political-10 rounded-md m-2 text-md "></span>
              <span className="text-gray-600 dark:text-gray-400 ">0%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-9 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">10%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-8 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">20%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-7 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">30%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-6 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">40%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-5 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">50%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-4 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">60%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-3 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">70%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-2 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">80%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-1 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">90%</span>
            </div>
            <div className="group flex items-center">
              <span className="w-5 h-5 inline-block bg-political-0 rounded-md m-2 text-md"></span>
              <span className="text-gray-600 dark:text-gray-400">100%</span>
            </div>
          </div>
      </div>

    {/* footer */}
    {/* <footer className={styles.footer}>
      Built by <Link href="https://www.shelbygn.com">Shelby Green</Link>. This is a proof of concept for <Link href="https://www.opentlh.com">Open Tallahassee</Link>. Methodology <Link href="https://github.com/Open-Data-Tallahassee/campaign-finance">here</Link>. Have suggestions or feedback? <Link href="mailto:opentlh@gmail.com">Email us</Link>.
    </footer> */}
    </div>
    </div>
  )
}

export default Home