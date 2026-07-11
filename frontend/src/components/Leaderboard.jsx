function Leaderboard({ setPage }) {

const nasional = [
  { nama: "Nala", cis: 270 },
  { nama: "Andi", cis: 220 },
  { nama: "Sinta", cis: 180 }
];

const kota = [
  { nama: "Nala", cis: 270 },
  { nama: "Budi", cis: 250 },
  { nama: "Rina", cis: 230 }
];

return (

<div className="dashboard">

<h1>🏆 Leaderboard</h1>

<h2>Nasional</h2>

<div className="leaderboard-list">

{kota.map((user,index)=>(

<div className="leader-item" key={index}>

<div className="leader-avatar">
👤
</div>

<div className="leader-info">

<h3>{user.nama}</h3>

<p>Total CIS {user.cis}</p>

</div>

</div>

))}

</div>

<h2>Kota</h2>
<div className="leaderboard-list">

{nasional.map((user,index)=>(

<div className="leader-item" key={index}>

<div className="leader-avatar">
👤
</div>

<div className="leader-info">

<h3>{user.nama}</h3>

<p>Total CIS {user.cis}</p>

</div>

<div className="leader-rank">

🏅 #{index+1}

</div>

</div>

))}

</div>

<button onClick={()=>setPage("dashboard")}>
← Kembali
</button>

</div>

)

}

export default Leaderboard;