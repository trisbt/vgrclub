import React from 'react'
import { commissioner } from '../fonts'
import Image from 'next/image'
import Link from 'next/link'


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
const page = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-primary" data-theme="mytheme">
      <div className='flex flex-col text-center justify-center w-full h-auto bg-accent pb-10'>
        <h1 className={`tracking-wider text-5xl md:text-6xl lg:text-7xl italic font-bold pt-8 ${commissioner.variable} font-sans`}>Our Supporters</h1>
        <p className={`text-1xl md:text-2xl lg:text-3xl pt-8 `}>Special thanks to our sponsors and partners</p>
      </div>
      <div className="py-8 px-4 width-full xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-md py-8 px-1 flex flex-wrap justify-center items-center">
          {partnersList.map((partners, index) => {
            return (
              <Link href={`${partners.link}`} key={index}>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                >
                  <div className="flex flex-row justify-center mx-1 my-1">
                    {partners.image}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 bg-black ">
      </section > */}
    </main>
  )
}

export default page