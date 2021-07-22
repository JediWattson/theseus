import { Fragment } from 'react'
import Head from 'next/head'

function HomePage() {
  return (
      <Fragment>
        <Head>
          <script src="homer/index.js" onLoad={() => console.log("HELLO")} />
        </Head>
      </Fragment>
  )
}

export default HomePage
