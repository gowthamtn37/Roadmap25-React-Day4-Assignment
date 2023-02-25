import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Dashboard } from "./Dashboard";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
