import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    let timer;
    if (running) {
      timer = setTimeout(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setRunning(false);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [time, running]);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return (
    <div className={`app ${mode}`}>
      <div className="box">
        <div className="menu">
          <button
            className={mode === "pomodoro" ? "active" : ""}
            onClick={() => {
              setTime(1500);
              setRunning(false);
              setMode("pomodoro");
            }}
          >
            Pomodoro
          </button>
          <button
            className={mode === "short" ? "active" : ""}
            onClick={() => {
              setTime(300);
              setRunning(false);
              setMode("short");
            }}
          >
            Short Break
          </button>
          <button
            className={mode === "long" ? "active" : ""}
            onClick={() => {
              setTime(900);
              setRunning(false);
              setMode("long");
            }}
          >
            Long Break
          </button>
        </div>
        <h1>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <button
          className="start"
          onClick={() => setRunning(!running)}
        >
          {running ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}

export default App;