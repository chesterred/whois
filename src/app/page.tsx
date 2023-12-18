'use client'

import Head from 'next/head';
import WhoisForm from '../components/WhoisForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WHOIS Lookup</title>
        <meta name="description" content="WHOIS Lookup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>WHOIS Lookup</h1>
        <WhoisForm />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
}
