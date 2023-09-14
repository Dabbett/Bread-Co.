import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Old Soul Sourdough!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Old Soul Sourdough" />
        <p className="description">
          Fresh Sourdough Made The Old Way </code>
        </p>
        <section>
          <h2> Our Passion: </h2>
          <img src="">
        </section>
    
      </main>

      <Footer />
    </div>
  )
}
