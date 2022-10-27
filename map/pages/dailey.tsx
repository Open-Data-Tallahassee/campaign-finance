import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/map'
import pic from "../images/john-dailey.jpeg"

const Home: NextPage = () => {
  return (
    <div className="p-1 flex flex-col min-h-screen">
    
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Map of John Dailey's campaign contributions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <a href="/">
        <div className=" mt-1 text-bold text-2xl text-green-900 text-left sm:text-lg sm:text-left sm:mt-1 ">Open Tallahassee</div>
      </a>
      
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
          <div className="group flex">
            <div className="group flex items-center">
              <span className="w-10 h-10 inline-block bg-tumbleweed-500 rounded-md m-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Legend indicator</span>
            </div>
            <div className="group flex items-center">
              <span className="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
              <span className="text-gray-600 dark:text-gray-400">Legend indicator</span>
            </div>
          </div>
      </div>

    {/* footer */}
    <footer className={styles.footer}>
      Built by <a href="https://www.shelbygn.com">Shelby Green</a>. This is a proof of concept for <a href="https://www.opentlh.com">Open Tallahassee</a>. Methodology <a href="https://github.com/Open-Data-Tallahassee/campaign-finance">here</a>. Have suggestions or feedback? <a href="mailto:opentlh@gmail.com">Email us</a>.
    </footer>
    </div>
    </div>
  )
}

export default Home
