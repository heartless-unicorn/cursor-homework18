import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <div>
        {" "}
        <h2>Autostart timer:</h2>
        <p>
          Step: 1s <br />
          Time: 3 minutes 30 seconds
        </p>
        <Timer
          minutes={3}
          seconds={30}
          step={1000}
          autorun={true}
          onTimeEnd={() => console.log("Час вийшов!")}
          onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
          onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
          onTick={(time) => console.log("Залишилось часу: " + time)}
        />
      </div>
      <div>
        {" "}
        <h2>Timer:</h2>
        <p>
          Step: 100ms <br />
          Time: 1 minute 45 seconds
        </p>
        <Timer
          minutes={1}
          seconds={45}
          step={100}
          milsec={1000}
          autorun={false}
          onTimeEnd={() => console.log("Час вийшов!")}
          onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
          onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
          onTick={(time) => console.log("Залишилось часу: " + time)}
        />
      </div>
    </div>
  );
}

export default App;
