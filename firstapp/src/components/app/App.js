import '../../styles/App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Front-End Development", "Progress"],
  ["HTML", 98],
  ["CSS", 89],
  ["Javascript", 60],
  ["React", 10],
];

const options = {
  title: "Learning Progress",
  is3D: true,
  backgroundColor: "#fff"
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
