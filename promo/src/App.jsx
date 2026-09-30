import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time, running]);

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return (
    <div className="app">
      <div className="box">
        <div className="menu">
          <button onClick={() => {
            setTime(1500);
            setRunning(false);
          }}>Pomodoro</button>

          <button onClick={() => {
            setTime(300);
            setRunning(false);
          }}>Short Break</button>

          <button onClick={() => {
            setTime(900);
            setRunning(false);
          }}>Long Break</button>
        </div>
        <h1>
          {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <button className="start" onClick={() => setRunning(!running)}>
          {running ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}
export default App;