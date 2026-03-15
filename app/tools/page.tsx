export default function ToolsPage(){

  const tools = [

    {name:"AI Chat",desc:"AI assistant"},
    {name:"Insurance AI",desc:"Insurance comparison"},
    {name:"Investment AI",desc:"Market analysis"}

  ]

  return(

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        AI Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {tools.map((tool,index)=>(

          <div key={index} className="border p-6 rounded-xl">

            <h2 className="text-xl font-semibold">
              {tool.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {tool.desc}
            </p >

          </div>

        ))}

      </div>

    </div>

  )

}
