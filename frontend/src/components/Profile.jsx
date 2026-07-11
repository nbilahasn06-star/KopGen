function Profile({
  cisScore,
  level,
  progress,
  badge,
  setPage,
  setIsLogin
}) {
  return (

<div className="profile-page">

<div className="profile-cover"></div>

<div className="profile-header">

<div className="profile-avatar">
👤
</div>

<div className="profile-info">

<h2>Nala</h2>

<p>🌟 Anggota Aktif</p>

</div>

</div>

<div className="profile-stats">

<div className="stat-card">

<h3>💚</h3>

<h2>{cisScore}</h2>

<p>CIS Score</p>

</div>

<div className="stat-card">

<h3>⭐</h3>

<h2>{level}</h2>

<p>Level</p>

</div>

<div className="stat-card">

<h3>📈</h3>

<h2>{progress}%</h2>

<p>Progress</p>

</div>

</div>

<div className="profile-box about-box">

  <h3>🌿 Tentang Saya</h3>

  <p>
    Sedang mengembangkan kemampuan kepemimpinan koperasi melalui pembelajaran di KOPGEN.
  </p>

</div>

<div className="profile-box">

<h3>🏅 Badge</h3>

<p>{badge ? badge : "Belum memiliki badge."}</p>

</div>

<div className="profile-box">

<h3>📌 Aktivitas Terbaru</h3>

<ul className="activity-list">

<li>📚 Menyelesaikan Modul 1</li>

<li>🔥 Login 7 Hari Berturut</li>

<li>💚 Mendapat +20 CIS</li>

</ul>

</div>

<button
className="logout-button"
onClick={()=>{
setIsLogin(false);
setPage("dashboard");
}}
>

🚪 Log Out

</button>

<button
className="back-button"
onClick={()=>setPage("dashboard")}
>

← Kembali

</button>

</div>

  );
}

export default Profile;