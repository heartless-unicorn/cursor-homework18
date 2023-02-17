import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <div></div>
      <Timer
        minutes={0}
        seconds={10}
        step={100}
        milsec={1000}
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimeStart={(timeLeft) => console.log("Таймер запущено!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
        onTick={(time) => console.log("Залишилось часу: " + time)}
      />
    </div>
  );
}

export default App;
