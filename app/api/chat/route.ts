export async function POST(req: Request) {

  const body = await req.json()

  const message = body.message

  return Response.json({
    reply: "AI response: " + message
  })

}