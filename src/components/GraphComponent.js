import React from "react";
import { Line, Scatter } from "react-chartjs-2";
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

const GraphComponent = (props) => {
  let x_actual = props.x_actual;
  let y_actual = props.y_actual;
  let y_predicted = props.y_predicted;
  let x_values = props.x_values;
  let graphTitle = props.graphTitle;

  let x_max = Math.max(...x_actual);
  let y_min = Math.min(...y_actual);

  const data = {
    datasets: [
      {
        label: "Actual Data",
        data: x_actual.map((value, index) => ({
          x: value,
          y: y_actual[index],
        })),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Polynomial Regression",
        data: x_values.map((value, index) => ({
          x: value,
          y: y_predicted[index],
        })),
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        type: "line",
        borderwidth: 0.1,
      },
      // need to add x = y line
    ],
  };

  // Chart configuration
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "nearest",
        intersect: false,
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";

            if (context.parsed.y !== null) {
              label += ": " + context.parsed.y;
            }
            return label;
          },
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: graphTitle,
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        min: 0, // start at zero
        // uncomment for x max
        // max: x_max + 5,
        title: {
          display: true,
          text: "Price Discount (%)",
        },
      },
      y: {
        // uncomment for x max
        // min: y_min - 5,
        title: {
          display: true,
          text: "Change in Demand (%)",
        },
      },
    },
  };

  return (
    <>
      <Scatter data={data} options={options} />
    </>
  );
};

export default GraphComponent;
