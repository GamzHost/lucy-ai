import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function chat(prompt) {
  try {
    const res = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: 'user', content: prompt }]
    })
    return res.choices[0].message.content
  } catch(err) {
    console.error(err)
    return "Maaf, Lucy gagal merespon."
  }
}