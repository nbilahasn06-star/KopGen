function Dashboard({ 
  cisScore, 
  exp, 
  level, 
  currentExp, 
  progress, 
  badge, 
  challengeDone,
  streak,
  moduleDone,
  setPage 
}) {

return (
<div className="dashboard">
  
{/* HEADER */}
<div className="top-header">

  <h2>🌿 KOPGEN</h2>

  <span>
    🔔
  </span>

</div>


{/* PROFILE */}
<div className="profile-card">

<div className="avatar">
👩
</div>

<div>
<p>Selamat Datang,</p>
<h3>Nala 👋</h3>
<small>🌟 Anggota Aktif</small>
</div>

</div>



{/* CIS SCORE */}
<div className="cis-card">

<h4>💚 CIS Score</h4>

<h1>{cisScore}</h1>

<span>
+12 hari ini
</span>

<p>
Terus tingkatkan kontribusimu!
</p>

</div>




{/* LEVEL & STREAK */}

<div className="stats-row">

<div className="small-card">

<h4>⭐ Level</h4>

<h2>{level}</h2>

<small>
{currentExp}/100 EXP
</small>

</div>



<div className="small-card">

<h4>🔥 Streak</h4>

<h2>{streak} Hari</h2>

<small>
Pertahankan terus!
</small>

</div>


</div>





{/* PROGRESS */}

<div className="card">

<div className="card-header">

<h3>📚 Progress Belajar</h3>

<span>Lihat Semua</span>

</div>



<div className="progress-area">


<div
  className="circle-progress"
  style={{
    background: `conic-gradient(
      #2E7D32 ${progress * 3.6}deg,
      #DCEFD8 ${progress * 3.6}deg 360deg
    )`,
  }}
>
  <span>{progress}%</span>
</div>



<div>

<p>
Kamu telah menyelesaikan
</p>

<h4>
{moduleDone} dari 5 Modul
</h4>

</div>


</div>


</div>



{/* BADGE */}

<div className="card">

<div className="card-header">

<h3>🏅 Badge</h3>

<span>Lihat Semua</span>

</div>

<div className="badge-box">

  <div className="badge-icon">
    🏅
  </div>

  <div>
    <h4>{badge ? badge : "Belum Ada Badge"}</h4>
    <small>Selesaikan modul untuk mendapatkan badge</small>
  </div>

</div>


</div>





{/* CHALLENGE */}

<div className="card">


<h3>
🎯 Challenge Hari Ini
</h3>


<p>
📖 Selesaikan Modul 1
</p>


<small>
Reward +20 CIS
</small>


<button
onClick={()=>setPage("modul")}
>

Mulai

</button>

</div>


{/* BOTTOM MENU */}

<div className="bottom-menu">


<button onClick={()=>setPage("modul")}>
📚
<small>Modul</small>
</button>


<button>
🎯
<small>Challenge</small>
</button>



<button onClick={()=>setPage("leaderboard")}>

🏆
<small>Leaderboard</small>

</button>


<button onClick={()=>setPage("profile")}>

👤
<small>Profil</small>

</button>


</div>



</div>

)

}

export default Dashboard;