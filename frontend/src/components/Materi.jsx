function Materi({ setPage }) {
  return (
    <div className="dashboard">

      <button
        className="back-button"
        onClick={() => setPage("modul")}
      >
        ← Kembali ke Modul
      </button>

      <h1>📚 Apa Itu Koperasi?</h1>

      <div className="card">
        <h3>📖 Definisi</h3>

        <p>
          Koperasi adalah badan usaha yang dimiliki dan dikelola bersama
          oleh para anggotanya untuk memenuhi kebutuhan ekonomi, sosial,
          dan budaya berdasarkan asas kekeluargaan.
        </p>
      </div>

      <div className="card">
        <h3>🎯 Tujuan Koperasi</h3>

        <ul>
          <li>Meningkatkan kesejahteraan anggota.</li>
          <li>Mendorong semangat gotong royong.</li>
          <li>Membangun ekonomi yang adil.</li>
        </ul>
      </div>

      <div className="card">
        <h3>⭐ Prinsip Koperasi</h3>

        <ul>
          <li>Keanggotaan sukarela dan terbuka.</li>
          <li>Pengelolaan demokratis.</li>
          <li>Pembagian SHU secara adil.</li>
          <li>Pendidikan koperasi.</li>
        </ul>
      </div>

      <div className="card">
        <h3>💡 Tahukah Kamu?</h3>

        <p>
          Koperasi pertama di Indonesia dipelopori oleh
          Raden Aria Wiriatmaja sebagai upaya membantu masyarakat
          memperoleh akses pembiayaan yang lebih adil.
        </p>
      </div>

      <button
        className="primary-button"
        onClick={() => setPage("quiz")}
      >
        🚀 Lanjut ke Quiz
      </button>

    </div>
  );
}

export default Materi;