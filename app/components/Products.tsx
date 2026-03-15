export default function Products(){

  return(

    <section className="py-24 bg-gray-100">

      <h2 className="text-4xl font-bold text-center">
        AI Products
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 px-12">

        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold">
            AI Chat Assistant
          </h3>

          <p className="mt-4 text-gray-600">
            Intelligent assistant for everyday tasks.
          </p >

        </div>

        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold">
            Insurance AI Engine
          </h3>

          <p className="mt-4 text-gray-600">
            AI-driven insurance recommendation engine.
          </p >

        </div>

        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-xl font-semibold">
            AI Market Analyzer
          </h3>

          <p className="mt-4 text-gray-600">
            Market insights powered by machine learning.
          </p >

        </div>

      </div>

    </section>

  )

}
