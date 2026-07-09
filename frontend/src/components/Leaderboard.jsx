function Leaderboard({ cisScore, setPage }) {
  return (
    <div className="dashboard">
      <h1>🏆 Leaderboard</h1>

      <div className="card">
        <h3>🥇 Nala</h3>
        <p>{cisScore} CIS</p>
      </div>

      <div className="card">
        <h3>🥈 Andi</h3>
        <p>220 CIS</p>
      </div>

      <div className="card">
        <h3>🥉 Sinta</h3>
        <p>180 CIS</p>
      </div>

      <button onClick={() => setPage("dashboard")}>
        ← Kembali
      </button>
    </div>
  );
}

export default Leaderboard;