import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer()

const TimerView:React.FC<{timer:Timer}> = observer((props) => (
  <button onClick={() => props.timer.reset()}>Seconds Pass : {props.timer.secondsPassed}</button>
))

const App = () => {

  setInterval(()=>{
    myTimer.increase()
  }, 1000)

  return <TimerView timer={myTimer}></TimerView>;
};

export default App;
