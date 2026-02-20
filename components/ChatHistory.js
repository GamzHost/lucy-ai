import { useState, useEffect } from 'react'

export default function ChatHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const chats = JSON.parse(localStorage.getItem('lucy_chats') || '[]')
    setHistory(chats)
  }, [])

  function loadChat(index) {
    const chats = JSON.parse(localStorage.getItem('lucy_chats') || '[]')
    const messagesDiv = document.getElementById('messages')
    messagesDiv.innerHTML = ''
    chats[index].messages.forEach(m => {
      const div = document.createElement('div')
      div.textContent = `${m.role}: ${m.content}`
      messagesDiv.appendChild(div)
    })
  }

  return (
    <div>
      {history.map((chat, i)=>(
        <div key={i} style={{ padding:'8px', cursor:'pointer' }} onClick={()=>loadChat(i)}>
          {chat.title || 'Chat Baru'}
        </div>
      ))}
    </div>
  )
}