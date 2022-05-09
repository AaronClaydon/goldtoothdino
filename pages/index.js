import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gold Tooth Dino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gold Tooth Dino" />
        <p className="description">
          Coming Soon
        </p>
      </main>
    </div>
  )
}
