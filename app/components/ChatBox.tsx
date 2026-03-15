"use client"

import { useState } from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatBox() {

  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {

    if (!input.trim()) return

    const newMessage: Message = {
      role: "user",
      content: input
    }

    const updatedMessages = [...messages, newMessage]

    setMessages(updatedMessages)
    setInput("")
    setLoading(true)

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input
        })
      })

      const data = await res.json()

      const aiMessage: Message = {
        role: "assistant",
        content: data.reply
      }

      setMessages([...updatedMessages, aiMessage])

    } catch (error) {

      console.error(error)

    }

    setLoading(false)

  }

  return (

    <div className="p-4 bg-blue-50 rounded-xl">

      {/* Chat messages */}

      <div className="h-96 overflow-y-auto mb-4 space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }
          >

            <span
              className={
                msg.role === "user"
                  ? "inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
                  : "inline-block bg-blue-200 text-white px-4 py-2 rounded-lg"
              }
            >

              {msg.content}

            </span>

          </div>

        ))}

        {loading && (
          <p className="text-gray-500">AI is thinking...</p >
        )}

      </div>

      {/* Input */}

      <div className="flex gap-3">

        <input
          className="flex-1 border p-3 rounded-lg"
          placeholder="Ask AI something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          onClick={sendMessage}
        >

          Send

        </button>

      </div>

    </div>

  )

}
