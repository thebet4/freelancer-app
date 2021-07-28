import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Work now</title>
      </Head>

      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + TailWind CSS
        </h1>
      </div>
    </div>
  )
}

export default Home
