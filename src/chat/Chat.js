import './Chat.css'

export default function Chat() {
    return (
        <div className="chatpage-container">
            <h2>Logo</h2>
            <p>Sdjhf sdfljhsdf sdfsjdhfs dfsd gffs difhsdf sdfg soidhgsodhgs dgs dgsdfsd sddg sdg.</p>
            <div className="chat-form-container">
                <div className="chat-message-area"></div>
                <form>
                    {/* <textarea className="chat-message-area" type="text" /> */}
                    <input className="chat-response" type="text" placeholder="Type..." />
                </form>
            </div>
        </div>
    )
}