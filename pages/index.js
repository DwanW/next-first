import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='web development, programming' />
      </Head>

      <main className="py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl">
          Welcome to <a className="text-blue-600 hover:underline focus:underline active:underline" href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-center">
          Get started by editing{' '}
          <code className="text-gray-500 rounded-lg p-3 text-lg font-mono">pages/index.js</code>
        </p>

        <div className="flex justify-center items-center flex-wrap max-w-3xl mt-12 w-full flex-col sm:w-auto sm:flex-row">
          <a href="https://nextjs.org/docs" className="m-4 flex-2 p-6 text-left border-gray-200 border rounded-xl transition-colors ease-in hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500" >
            <h3 className="text-2xl mb-4">Documentation &rarr;</h3>
            <p className="text-xl">Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="m-4 flex-2 p-6 text-left border-gray-200 border rounded-xl transition-colors ease-in hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500">
            <h3 className="text-2xl mb-4">Learn &rarr;</h3>
            <p className="text-xl">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
          className="m-4 flex-2 p-6 text-left border-gray-200 border rounded-xl transition-colors ease-in hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500"
          href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <h3 className="text-2xl mb-4">Examples &rarr;</h3>
            <p className="text-xl">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 flex-2 p-6 text-left border-gray-200 border rounded-xl transition-colors ease-in hover:border-blue-500 hover:text-blue-500 focus:border-blue-500 focus:text-blue-500"
          >
            <h3 className="text-2xl mb-4">Deploy &rarr;</h3>
            <p className="text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border border-gray-200 flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2"/>
        </a>
      </footer>
    </div>
  )
}
