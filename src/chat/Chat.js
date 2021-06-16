import { useState } from 'react'
import './Chat.css'

export default function Chat() {
    const [messages, setMessages] = useState([])
    const [chatBoxData, setChatBoxData] = useState('')

    const handleAddMessage = (e) => {
        e.preventDefault();
        const newBox = [{ title: chatBoxData }, ...messages];
        setMessages(newBox);
        setChatBoxData('');
        console.log(messages)
    }

    return (
        <div className="chatpage-container">
            <h2>Chat</h2>
            <p>Sdjhf sdfljhsdf sdfsjdhfs dfsd gffs difhsdf sdfg soidhgsodhgs dgs dgsdfsd sddg sdg.</p>
            <div className="chat-form-container">
                <div className="chat-message-area">{messages.map((message) => {
                    return (
                        <div>
                            <p className="message-on-screen">{message.title}</p>
                        </div>
                    )
                })}</div>
                <form onSubmit={handleAddMessage}>
                    <input className="chat-response" type='text' placeholder="Type..." value={chatBoxData} onChange={(event) => setChatBoxData(event.target.value)} />
                    {/* <input className="chat-submit-button" type='submit' value="Send" /> */}
                </form>
            </div>
        </div>
    )
}