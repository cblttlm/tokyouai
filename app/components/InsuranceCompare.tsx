"use client"

import { useState } from "react"

type Insurance = {
  company: string
  product: string
  premium: number
  coverage: number
}

export default function InsuranceCompare() {

  const [data] = useState<Insurance[]>([
    {
      company: "AIA",
      product: "Life Protect",
      premium: 500,
      coverage: 100000
    },
    {
      company: "MetLife",
      product: "Health Secure",
      premium: 450,
      coverage: 90000
    },
    {
      company: "Prudential",
      product: "Family Shield",
      premium: 520,
      coverage: 120000
    }
  ])

  const scored = data
    .map((item) => ({
      ...item,
      score: item.coverage / item.premium
    }))
    .sort((a, b) => b.score - a.score)

  return (

    <div className="bg-white p-8 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        Compare Insurance Plans
      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="border-b">

            <th className="text-left p-3">Company</th>
            <th className="text-left p-3">Product</th>
            <th className="text-left p-3">Premium</th>
            <th className="text-left p-3">Coverage</th>
            <th className="text-left p-3">AI Score</th>

          </tr>

        </thead>

        <tbody>

          {scored.map((item, index) => (

            <tr key={index} className="border-b">

              <td className="p-3">{item.company}</td>
              <td className="p-3">{item.product}</td>
              <td className="p-3">${item.premium}</td>
              <td className="p-3">${item.coverage}</td>
              <td className="p-3 font-semibold text-blue-600">
                {item.score.toFixed(2)}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}
