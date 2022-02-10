import { observer } from "mobx-react";
import countStore from "./store/count";

const App: React.FC = () => {
  const count = countStore;

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Class)</h1>
        <div>number: {count.number}</div>
        <button onClick={() => count.increase()}>plus</button>
        <button onClick={() => count.decrease()}>minus</button>
      </div>

      {/* <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>num: {count.num}</div>
        <button onClick={() => count.increase()}>increment</button>
      </div> */}
    </div>
  );
};

export default observer(App);
