import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for the chart
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Demo Line Plot",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgba(75, 192, 192, 0.2)",
    },
  ],
};

// Chart configuration
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sample Line Chart",
    },
  },
};

const GraphComponent = (props) => {
  let x_values = props.x_values;
  let y_values = props.y_values;
  let x_actual = props.x_actual;
  let y_predicted = props.y_predicted;

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default GraphComponent;
