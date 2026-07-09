function Modul({
  modules,
  setModules,
  setCisScore,
  setExp,
  setProgress,
  setBadge,
  setChallengeDone,

  currentModuleIndex,
  setCurrentModuleIndex,
  
  setPage,
}) {

  const handleCompleteModule = (index) => {

    const currentModule = modules[index];

    // Jangan lakukan apa-apa kalau modul masih terkunci
    if (currentModule.status !== "active") return;

    // Tambah CIS
    setCisScore((prev) => prev + currentModule.reward.cis);

    // Tambah EXP
    setExp((prev) => prev + currentModule.reward.exp);

    // Tambah Progress
    setProgress((prev) =>
      Math.min(prev + currentModule.progress, 100)
    );

    // Badge
    setBadge(currentModule.badge);

    // Challenge selesai
    setChallengeDone(true);

    // Update status modul
    setModules((prevModules) => {

      const updatedModules = prevModules.map((module) => ({
        ...module,
      }));

      // Modul sekarang selesai
      updatedModules[index].status = "completed";

      // Unlock modul berikutnya
      if (updatedModules[index + 1]) {
        updatedModules[index + 1].status = "active";
      }

      return updatedModules;
    });

    // Kembali ke Dashboard
    setPage("dashboard");
  };

  return (
    <div className="dashboard">

      <button
        className="back-button"
        onClick={() => setPage("dashboard")}
      >
        ← Dashboard
      </button>

      <h1>📚 Modul Belajar</h1>

      {modules.map((module, index) => (
        <div className="card" key={module.id}>

          <h3>{module.title}</h3>

          <p>{module.description}</p>

          <button
            onClick={() => {
              setCurrentModuleIndex(index);
              setPage("materi");

            }}
            disabled={module.status !== "active"}
          >   
            {module.status === "locked"
              ? "🔒 Terkunci"
              : module.status === "completed"
              ? "✔ Sudah Diselesaikan"
              : "📖 Mulai"}
          </button>

        </div>
      ))}

    </div>
  );
}

export default Modul;