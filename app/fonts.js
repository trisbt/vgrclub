import { Commissioner } from 'next/font/google'
import localFont from 'next/font/local'
import { Noto_Sans } from 'next/font/google'

export const commissioner = Commissioner({
  // weight: '700',
  subsets: ['latin'],
  variable: '--font-commissioner',
  display: 'swap',
})

// export const peach = localFont({
//   src: '../public/assets/Mastery Kingdom.otf',
//   variable: '--font-peachh',
//   display: 'swap',
// })

export const noto = Noto_Sans({ 
  subsets: ['latin'], 
  display: 'swap' 
});
