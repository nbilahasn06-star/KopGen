function Reward({
  modules,
  currentModuleIndex,

  cisScore,
  exp,
  badge,

  setPage,

}) {

  const currentModule = modules[currentModuleIndex];

  return (

    <div className="dashboard">

      <div className="card">

        <h1>🎉 Selamat!</h1>

        <p>
          Kamu berhasil menyelesaikan <b>{currentModule.title}</b>.
        </p>

      </div>

      <div className="card">

        <h3>Reward yang Didapat</h3>

        <p className="reward-text">
          ⭐ +{currentModule.reward.exp} EXP
        </p>

        <p className="reward-text">
          💚 +{currentModule.reward.cis} CIS
        </p>

        <p className="reward-text">
          📈 +{currentModule.progress}% Progress
        </p>

        <p className="reward-badge">
          🏅 {currentModule.badge}
        </p>

      </div>

      <div className="card">

        <h3>🏅 Badge Baru</h3>

        <p>{currentModule.badge}</p>

      </div>

      <div className="card">

        <h3>📊 Status Kamu Sekarang</h3>

        <p>⭐ EXP : {exp}</p>

        <p>💚 CIS : {cisScore}</p>

        <p>🏅 Badge : {badge}</p>

      </div>

      <button
        className="primary-button"
        onClick={() => setPage("dashboard")}
      >
        🏠 Kembali ke Dashboard
      </button>

    </div>

  );

}

export default Reward;