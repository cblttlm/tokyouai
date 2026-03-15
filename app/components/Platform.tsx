export default function Platform(){

  return(

    <section className="py-24 px-12">

      <h2 className="text-4xl font-bold text-center">
        AI Platform
      </h2>

      <div className="grid md:grid-cols-3 gap-12 mt-16">

        <div>

          <h3 className="text-xl font-semibold">
            AI Chat
          </h3>

          <p className="text-gray-600 mt-3">
            Conversational AI powered by advanced models.
          </p >

        </div>

        <div>

          <h3 className="text-xl font-semibold">
            AI Insurance
          </h3>

          <p className="text-gray-600 mt-3">
            Compare insurance plans using intelligent algorithms.
          </p >

        </div>

        <div>

          <h3 className="text-xl font-semibold">
            AI Investment
          </h3>

          <p className="text-gray-600 mt-3">
            Analyze stock markets and trends with AI.
          </p >

        </div>

      </div>

    </section>

  )

}