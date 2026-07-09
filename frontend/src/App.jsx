import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Modul from "./components/Modul";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import { modules as initialModules } from "./data/moduleData";
import Materi from "./components/Materi";
import Quiz from "./components/Quiz";
import Reward from "./components/Reward";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [page, setPage] = useState("dashboard");

  // Data modul
  const [modules, setModules] = useState(initialModules);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(null);

  // Data user
  const [cisScore, setCisScore] = useState(250);
  const [exp, setExp] = useState(40);
  const [progress, setProgress] = useState(40);
  const [badge, setBadge] = useState("");
  const [challengeDone, setChallengeDone] = useState(false);

  const [streak, setStreak] = useState(7);
  const [moduleDone, setModuleDone] = useState(2);

  const level = Math.floor(exp / 100) + 1;
  const currentExp = exp % 100;

  return (
    <>
      {isLogin ? (
        page === "dashboard" ? (
          <Dashboard
            cisScore={cisScore}
            exp={exp}
            level={level}
            currentExp={currentExp}
            progress={progress}
            badge={badge}
            challengeDone={challengeDone}

            streak={streak}
            moduleDone={moduleDone}

            setPage={setPage}
          />
        ) : page === "modul" ? (
          <Modul
            modules={modules}
            setModules={setModules}

            setCisScore={setCisScore}
            setExp={setExp}
            setProgress={setProgress}
            setBadge={setBadge}
            setChallengeDone={setChallengeDone}

            currentModuleIndex={currentModuleIndex}
            setCurrentModuleIndex={setCurrentModuleIndex}

            setPage={setPage}
          />
        ) : page === "materi" ? (
          <Materi
            modules={modules}
            currentModuleIndex={currentModuleIndex}
          setPage={setPage}
          />
        ) : page === "quiz" ? (
          <Quiz
            modules={modules}
            currentModuleIndex={currentModuleIndex}

            setModules={setModules}

            setCisScore={setCisScore}
            setExp={setExp}
            setProgress={setProgress}
            setBadge={setBadge}
            setChallengeDone={setChallengeDone}

            setPage={setPage}
          />
        ) : page === "reward" ? (
          <Reward
          modules={modules}
          currentModuleIndex={currentModuleIndex}

          cisScore={cisScore}
          exp={exp}
          badge={badge}
          setPage={setPage}
          />
        ) : page === "leaderboard" ? (
          <Leaderboard
            cisScore={cisScore}
            setPage={setPage}
          />
        ) : page === "profile" ? (
          <Profile
            cisScore={cisScore}
            progress={progress}
            badge={badge}
            setPage={setPage}
          />
        ) : null
      ) : (
        <div className="container">
          <h1>🌿 KOPGEN</h1>

          <h2>Empowering the Next Generation of Cooperative Leaders</h2>

          <div className="buttons">
            <button>Mulai Belajar</button>

            <button onClick={() => setIsLogin(true)}>
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;