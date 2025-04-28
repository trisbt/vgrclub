import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"


const partnersList = [
  {
    image: <Image
      src={'./assets/partner-logos/fabletics-seeklogo.svg'}
      alt='fabletics'
      width="0"
      height="0"
      sizes="100vw"
      className="w-20 h-auto"
    />,
    link: "https://www.fabletics.com/"
  },
  {
    image: <Image
      src={'/assets/partner-logos/IV2_PNG-min.png'}
      alt='iv2'
      width="0"
      height="0"
      sizes="100vw"
      className="w-20 h-auto"
      unoptimized
    />,
    link: "https://www.iv2-hydration.com/"
  },
  {
    image: <Image
      src={'./assets/partner-logos/fabletics-seeklogo.svg'}
      alt='fabletics'
      width="0"
      height="0"
      sizes="100vw"
      className="w-20 h-auto"
    />,
    link: "https://www.fabletics.com/"
  },
  {
    image: <Image
      src={'./assets/partner-logos/fabletics-seeklogo.svg'}
      alt='fabletics'
      width="0"
      height="0"
      sizes="100vw"
      className="w-20 h-auto"
    />,
    link: "https://www.fabletics.com/"
  },
]

const Partners = () => {
  return (
    <main className="flex min-w-full flex-col items-center justify-start bg-accent" data-theme="mytheme">
      <div className='flex flex-col text-center justify-center w-full h-auto  pb-8'>
        <h1 className={`tracking-wider text-5xl md:text-6xl lg:text-7xl font-bold pt-8 >Our Supporters</h1>
        <p className={`text-1xl md:text-2xl lg:text-3xl pt-3 `}>Special thanks to our sponsors and partners</p>
      </div>
      <div className=" px-4 py-4 min-w-full xl:px-16 bg-accent">
        <div className="py-8 px-1 gap-2 flex flex-wrap justify-around items-center">
          {partnersList.map((partners, index) => {
            return (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href={`${partners.link}`} key={index}>
                  <div key={index}>
                    <div className="bg-primary ring ring-secondary flex flex-col items-center justify-center mx-1 my-1 rounded-lg shadow-xl w-32 md:w-48 h-32 ">
                      {partners.image}
                    </div>
                  </div>
                </Link>
              </motion.button>
            );
          })}
        </div>
      </div>
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 bg-black ">
    </section > */}
    </main>
  )
}

export default Partners