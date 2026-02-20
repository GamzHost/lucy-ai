import { useState } from 'react'
import openaiClient from '../utils/openaiClient'

export default function ChatInput() {
  const [input, setInput] = useState('')

  async function sendMessage() {
    if(!input) return
    const messagesDiv = document.getElementById('messages')
    
    // tampilkan user message
    const userDiv = document.createElement('div')
    userDiv.textContent = 'User: ' + input
    messagesDiv.appendChild(userDiv)

    // simpan di localStorage
    let chats = JSON.parse(localStorage.getItem('lucy_chats') || '[]')
    if(!chats[0]) chats[0] = { title:'Chat Baru', messages:[] }
    chats[0].messages.push({ role:'user', content:input })
    localStorage.setItem('lucy_chats', JSON.stringify(chats))

    // panggil OpenAI
    const res = await openaiClient(input)
    const aiDiv = document.createElement('div')
    aiDiv.textContent = 'Lucy: ' + res
    messagesDiv.appendChild(aiDiv)
    setInput('')
  }

  return (
    <div style={{ padding:16, borderTop:'1px solid rgba(255,255,255,0.06)', display:'flex', gap:8 }}>
      <input value={input} onChange={e=>setInput(e.target.value)} style={{ flex:1, padding:8, borderRadius:8, border:'none', background:'#12121a', color:'#e8e8f0' }} placeholder="Tanya Lucy..." />
      <button onClick={sendMessage} style={{ padding:'8px 12px', borderRadius:8, border:'none', background:'#7b61ff', color:'white' }}>Kirim</button>
    </div>
  )
}