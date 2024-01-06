import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "chart.js/auto";
import { features } from "../../Constants/Arrays";
import PropTypes from 'prop-types';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18
    }
  }
};

const BarChartComponent = ({ datas }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Click Count",
        data: [],
        backgroundColor: "black", // Set bar color to black
      },
    ],
  });

  const calculateTotals = (data) => {
    const totals = features.map((feature) =>
      data.reduce((acc, item) => acc + parseInt(item[feature], 10), 0)
    );

    return totals;
  };

  useEffect(() => {
    const totals = calculateTotals(datas);
    setChartData({
      labels: features,
      datasets: [
        {
          label: "Click Count",
          data: totals,
          backgroundColor: "black", // Set bar color to black
        },
      ],
    });
  }, [datas]);

  return (
    <div>
      <Bar data={chartData} options={options} id="1" />
    </div>
  );
};

BarChartComponent.propTypes = {
  datas: PropTypes.array.isRequired,
};

export default BarChartComponent;