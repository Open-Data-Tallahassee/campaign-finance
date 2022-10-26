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
        <meta name="description" content="Politician profile for John Dailey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <div className=" border-b-2 border-slate-900 ">
        <div className={styles.heading}>Open Tallahassee</div>
      </div>
      
      {/* top section */}
      <div>
        <div className=" group flex items-center ">
          <div className=" flex m-1 h-32 w-32 rounded-full border-4 border-slate-900 sm:w-24 sm:h-24 rounded-full border-b-4 border-slate-900">
            <Image className=" overflow-hidden rounded-full" alt="" src={pic} />
          </div>
          <div className=" ltr:ml-3 ">
            <button className=" bg-cyan-500 text-white font-bold py-2 px-4 rounded-full ">John Dailey</button>
            <p className="text-sm font-medium text-slate-900 ">Currently: Mayor of Tallahassee</p>
            <p className="text-sm font-medium text-slate-900 ">Running for re-election, against Kristin Dozier</p>
          </div>
        </div>
      <h1 className="text-sm text-center mt-10 font-bold text-grey-900 sm:text-lg ">Raised $_______ from _______ donors for this race (as of 10/24/22):</h1>
        {/* <div className=" m-1 h-24 w-24 flex justify-center sm:w-24 sm:h-24 rounded-full flex justify-center">
          <Image
          src={pic}
          alt="Picture of John Dailey"
          className="rounded-full" 
          />
        </div>
        <h1 className="text-2xl text-center font-bold text-grey-900 sm:text-2xl ">John Dailey</h1>
        <h1 className="text-sm text-center font-bold text-grey-900 sm:text-lg ">Currently: Mayor of Tallahassee</h1>
        <h1 className="text-sm text-center font-bold text-grey-900 sm:text-lg ">Running for re-election, against Kristin Dozier</h1>
        <h1 className="text-sm text-center mt-10 font-bold text-grey-900 sm:text-lg ">Raised $_______ from _______ donors for this race (as of 10/24/22):</h1> */}
      </div>

      {/* middle section */}
      <div className=" bg-red-200 mt-5">
          <Map/> 
      </div>

    {/* bottom section */}
    <div className=" bg-red-200 ">
      Search contributions by name or address:
    </div>

    {/* footer */}
    <footer className={styles.footer}>
      <a href="/">Open Tallahassee</a> is a digital publication that makes it easier to stay informed and connected in Tallahassee.
    </footer>
    </div>
    </div>
  )
}

export default Home
