import { useState } from "react";
import "./KebiChat.css";

import room from "../assets/RuangKebi.png";
import kebiMenyapa from "../assets/Kebi/Menyapa.png";
import kebiCry from "../assets/Kebi/Sedih.png";

function KebiChat({ setPage }) {
    const [message, setMessage] = useState("");
    const [isDemoReply, setIsDemoReply] = useState(false);

  return (

    <div className="kebi-page">

      {/* Header */}

      <div className="kebi-header">

        <button
          className="back-btn"
          onClick={() => setPage("dashboard")}
        >
          ←
        </button>

        <h2>Ruang Kebi</h2>

      </div>


      {/* Scene */}

      <div className="kebi-scene">

        <img
          src={room}
          alt="Ruang Kebi"
          className="room-bg"
        />

        <div className="dialog-bubble">

            {isDemoReply ? (
                <>
                    <h3>Maaf ya </h3>

                    <p>
                        Saat ini aku masih dalam tahap pengembangan.
                    </p>
                </>
            ) : (
                <>
                    <h3>Halo Nala! 👋</h3>

                    <p>
                        Selamat datang di ruang kerjaku.
                        <br />
                        Ada yang ingin kamu tanyakan?
                    </p>
                </>
            )}

        </div>

        <img
          src={isDemoReply ? kebiCry : kebiMenyapa}
          alt="Kebi"
          className="kebi-character"
        />

      </div>


      {/* Quick Question */}

        <h3 className="popular-title">
            Pertanyaan Populer
        </h3>

        <div className="popular-list">

            <div className="popular-item">
                <div className="popular-left">
                    <span className="popular-icon">💚</span>
                    <span className="popular-text">
                        Apa itu CIS Score?
                    </span>
                </div>

                <span className="arrow">›</span>
            </div>

            <div className="popular-item">
                <div className="popular-left">
                    <span className="popular-icon">📚</span>
                    <span className="popular-text">
                        Bagaimana cara belajar di KopGen?
                    </span>
                </div>

                <span className="arrow">›</span>
            </div>

            <div className="popular-item">
                <div className="popular-left">
                    <span className="popular-icon">🏅</span>
                    <span className="popular-text">
                        Bagaimana mendapatkan Badge?
                    </span>
                </div>

                <span className="arrow">›</span>
            </div>

        </div>


      {/* Input */}

      <div className="chat-input">

        <input
          vakue={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pertanyaanmu..."

        />

        <button
            onClick={() => {

                if (message.trim() === "") return;

                setIsDemoReply(true);
                setMessage("");

            }}
        >
            ➜
        </button>

      </div>

    </div>

  )

}

export default KebiChat;