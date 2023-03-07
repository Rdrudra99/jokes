import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import CallonFetch from './CallonFetch'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        <main className='flex w-full flex-1  flex-col items-center justify-center px-20 text-center'>
            <CallonFetch />
        </main>
      </div>
    </>
  )
}
