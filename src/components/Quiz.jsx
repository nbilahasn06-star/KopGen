import { useState } from "react";
import { quizQuestions } from "../data/quizData";

function Quiz({
  modules,
  setModules,
  currentModuleIndex,

  setCisScore,
  setExp,
  setProgress,
  setBadge,
  setChallengeDone,

  setPage,
}) {

  // Soal yang sedang ditampilkan
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Jawaban yang dipilih user
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Jumlah jawaban benar
  const [score, setScore] = useState(0);

  // Ambil soal berdasarkan index
  const question = quizQuestions[currentQuestion];

  const handleNext = () => {

    let newScore = score;

    // Jika jawaban benar
    if (selectedAnswer === question.answer) {
      newScore++;
      setScore(newScore);
    }

    // Kalau masih ada soal berikutnya
    if (currentQuestion < quizQuestions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedAnswer(null);

    } else {

      // ==========================
      // QUIZ SELESAI
      // ==========================

      if (newScore >= 4) {

        alert("🎉 Selamat! Kamu lulus Quiz!");

        const currentModule = modules[currentModuleIndex];

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

        // Challenge
        setChallengeDone(true);

        // Update status modul
        setModules((prevModules) => {

          const updatedModules = prevModules.map((module) => ({
            ...module,
          }));

          updatedModules[currentModuleIndex].status = "completed";

          if (updatedModules[currentModuleIndex + 1]) {
            updatedModules[currentModuleIndex + 1].status = "active";
          }

          return updatedModules;
        });

        // Kembali ke Dashboard
        setPage("reward");

      } else {

        alert("😢 Nilai belum memenuhi.\nSilakan pelajari lagi materinya.");

        setPage("materi");

      }

    }

  };

  return (

    <div className="dashboard">

      <button
        className="back-button"
        onClick={() => setPage("materi")}
      >
        ← Kembali
      </button>

      <h1>📝 Quiz Modul 1</h1>

      <h2>
        Soal {currentQuestion + 1} / {quizQuestions.length}
      </h2>

      <div className="quiz-progress">

        <div
            className="quiz-progress-fill"
            style={{
            width: `${
                ((currentQuestion + 1) / quizQuestions.length) * 100
            }%`,
            }}
        ></div>

        </div>

      <div className="card">

        <h3>{question.question}</h3>

        {question.options.map((option, index) => (

          <div
            key={index}
            style={{ marginTop: "15px" }}
          >

            <label>

              <input
                type="radio"
                checked={selectedAnswer === index}
                onChange={() => setSelectedAnswer(index)}
              />

              {" "}

              {option}

            </label>

          </div>

        ))}

      </div>

      <button
        className="primary-button"
        disabled={selectedAnswer === null}
        onClick={handleNext}
      >

        {currentQuestion === quizQuestions.length - 1
          ? "✅ Selesai"
          : "➡ Selanjutnya"}

      </button>

    </div>

  );

}

export default Quiz;