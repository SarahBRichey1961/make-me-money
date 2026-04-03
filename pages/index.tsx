import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Make_Me_Money</title>
        <meta name="description" content="This app will ask questions, need to code for input of questions about interests and hobbies" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <header className="border-b border-slate-700 bg-slate-900/80 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Make_Me_Money
            </h1>
          </div>
        </header>
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-5xl font-bold text-white mb-4">This app will ask questions, need to code for input of questions about interests and hobbies</h2>
          <p className="text-xl text-slate-300 mb-6">Unemployment, generating ideas that this app itself will Build for them without having to deal with github and netlify, it builds and deploys the entire end to end application.</p>
          <p className="text-lg text-slate-400 mb-8">This app builds an app to ask the question "What are your hobbies", "What are your interests" and then it goes and analyzes and builds ideas for them to build</p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🚀</div>
            <p className="text-slate-400">Set up GitHub repository and development environment</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-3">⚡</div>
            <p className="text-slate-400">Design database schema and data models</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-3">✨</div>
            <p className="text-slate-400">Create project specification and user stories</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🎯</div>
            <p className="text-slate-400">Build backend API with core endpoints</p>
          </div>
          </div>
        </section>
      </main>
    </>
  )
}