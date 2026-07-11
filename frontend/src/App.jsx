import { useState } from "react";

import Dashboard from "./components/Dashboard";
import Modul from "./components/Modul";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Materi from "./components/Materi";
import Quiz from "./components/Quiz";
import Reward from "./components/Reward";
import Login from "./components/Login";
import FloatingKebi from "./components/FloatingKebi"
import KebiChat from "./components/KebiChat";


import { modules as initialModules } from "./data/moduleData";

import "./App.css";

function App() {

  // ==========================
  // Navigation
  // ==========================
  const [isLogin, setIsLogin] = useState(false);
  const [page, setPage] = useState("landing");

  // ==========================
  // Module Data
  // ==========================
  const [modules, setModules] = useState(initialModules);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(null);

  // ==========================
  // Kebi
  // ==========================
  const [showHelp, setShowHelp] = useState(false);

  // ==========================
  // User Data
  // ==========================
  const [cisScore, setCisScore] = useState(250);
  const [exp, setExp] = useState(40);
  const [progress, setProgress] = useState(40);
  const [badge, setBadge] = useState("");
  const [challengeDone, setChallengeDone] = useState(false);

  const [streak, setStreak] = useState(7);
  const [moduleDone, setModuleDone] = useState(2);

  const level = Math.floor(exp / 100) + 1;
  const currentExp = exp % 100;

  // ==========================
  // BEFORE LOGIN
  // ==========================

  if (!isLogin) {

    if (page === "login") {
      return (
        <Login
          setIsLogin={setIsLogin}
          setPage={setPage}
        />
      );
    }

    return (
      <div className="landing-container">

        <div className="landing-overlay">

          <div className="landing-logo">
            🌿
          </div>

          <h1 className="landing-title">
            KOPGEN
          </h1>

          <p className="landing-tagline">
            Empowering the Next Generation
            <br />
            of Cooperative Leaders
          </p>

          <p className="landing-motto">
            🌱 Learn • Lead • Grow
          </p>

          <div className="buttons">

            <button>
              Sign Up
            </button>

            <button
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </div>

        </div>

      </div>
    );
  }

  // ==========================
  // AFTER LOGIN
  // ==========================

  let currentPage;
  switch (page) {

    case "dashboard":
      currentPage = (
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
      );
      break;

    case "modul":
      currentPage = (
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
      );
      break;

    case "materi":
      currentPage = (
        <Materi
          modules={modules}
          currentModuleIndex={currentModuleIndex}
          setPage={setPage}
        />
      );
      break;

    case "quiz":
      currentPage = (
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
      );
      break;

    case "reward":
      currentPage = (
        <Reward
          modules={modules}
          currentModuleIndex={currentModuleIndex}
          cisScore={cisScore}
          exp={exp}
          badge={badge}
          setPage={setPage}
        />
      );
      break;

    case "leaderboard":
      currentPage = (
        <Leaderboard
          cisScore={cisScore}
          setPage={setPage}
        />
      );
      break;

    case "profile":
      currentPage = (
        <Profile
          cisScore={cisScore}
          level={level}
          progress={progress}
          badge={badge}
          setPage={setPage}
          setIsLogin={setIsLogin}
        />
      );
      break;

    case "kebi":
      currentPage=(
       <KebiChat
         setPage={setPage}
        />
      );

      break;

    default:
      currentPage = (
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
      );
      break;
  }

return (
  <>
    {currentPage}

    <FloatingKebi
      onClick={() => setShowHelp(prev => !prev)}
    />

    {showHelp && (
      <div className="kebi-popup">

        <h4>Halo, Nala! 👋</h4>

        <p>
          Aku Kebi 🦦
          <br />
          Ada yang bisa kubantu hari ini?
        </p>

        <button
          className="kebi-chat-btn"
            onClick={()=>{
                setShowHelp(false);
                setPage("kebi");
            }}
          >
          🌿 Tanya Kebi
        </button>

      </div>
)}
  </>
);  

}

export default App;