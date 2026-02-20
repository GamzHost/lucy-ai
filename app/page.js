import ChatHistory from '../components/ChatHistory'
import ChatInput from '../components/ChatInput'
import '../app/globals.css'

export default function Home() {
  return (
    <div style={{ display:'flex', height:'100vh' }}>
      <aside style={{ width:260, borderRight:'1px solid rgba(255,255,255,0.06)', background:'#12121a', padding:20 }}>
        <h2 style={{ fontFamily:'Syne', fontSize:24, marginBottom:20 }}>Lucy AI</h2>
        <ChatHistory />
      </aside>
      <main style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
        <div style={{ flex:1, overflowY:'auto', padding:24 }}>
          <div id="messages"></div>
        </div>
        <ChatInput />
      </main>
    </div>
  )
}