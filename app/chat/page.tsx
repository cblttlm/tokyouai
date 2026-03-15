"use client"

import { useState, useRef, useEffect } from "react"

export default function ChatPage() {

  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {

    if (!input) return

    const userMessage = { role: "user", content: input }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    })

    const data = await res.json()

    const aiMessage = {
      role: "assistant",
      content: data.reply
    }

    setMessages((prev) => [...prev, aiMessage])
  }

  return (

    <div className="min-h-screen bg-gray-900 flex flex-col">

      <header className="p-4 text-white text-xl border-b border-gray-700">
        Tokyo AI Chat
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.map((msg, i) => (

          <div
            key={i}
            className={`max-w-xl p-3 rounded-xl text-white ${
              msg.role === "user"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-700"
            }`}
          >
            {msg.content}
          </div>

        ))}

        <div ref={bottomRef}></div>

      </div>

      <div className="p-4 border-t border-gray-700 flex">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI..."
          className="flex-1 bg-gray-800 text-white p-3 rounded-l-xl outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 px-6 text-white rounded-r-xl"
        >
          Send
        </button>

      </div>

    </div>

  )
}
