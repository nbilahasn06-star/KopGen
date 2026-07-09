function Profile({
  cisScore,
  progress,
  badge,
  setPage,
}) {
  return (
    <div className="dashboard">
      <h1>👤 Profil Saya</h1>

      <div className="card">
        <h3>Nama</h3>
        <p>Nala</p>
      </div>

      <div className="card">
        <h3>Level</h3>
        <p>3</p>
      </div>

      <div className="card">
        <h3>CIS Score</h3>
        <p>{cisScore}</p>
      </div>

      <div className="card">
        <h3>Progress</h3>
        <p>{progress}%</p>
      </div>

      <div className="card">
        <h3>Badge</h3>
        <p>{badge ? badge : "Belum Ada Badge"}</p>
      </div>

      <button onClick={() => setPage("dashboard")}>
        ← Kembali
      </button>
    </div>
  );
}

export default Profile;