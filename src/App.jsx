import "./App.css";
import { AnimatedPinDemo } from "./component/Card";
import { GridBackgroundDemo } from "./Background";
import { ThreeDCardDemo } from "./component/CardEffect";
import { DraggableCardDemo } from "./component/DragPhoto";

function App() {
  return (
<div className="min-h-screen text-white bg-gradient-to-br from-black via-[#0f172a] to-[#0b1120]">
  <GridBackgroundDemo />
  <ThreeDCardDemo />
  <DraggableCardDemo/>
</div>
  );
}

export default App;
