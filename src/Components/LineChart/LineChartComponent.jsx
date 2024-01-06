import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";
import "chartjs-adapter-date-fns";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import Cookies from "js-cookie";
import {
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js/auto";
import { features } from "../../Constants/Arrays";
import PropTypes from 'prop-types';

Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const chartOptions = {
  responsive: true,
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "xy",
      },
      pan: {
        enabled: true,
        mode: "xy",
      },
    },
  },
};
const LineChartComponent = ({ datas }) => {
  const authData = useSelector((state) => state.auth.userData?.$id);
  const location = useLocation();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
      },
    ],
  });
  const [selectedCategory, setSelectedCategory] = useState("A");
  useEffect(() => {
    if (authData) {
      const queryParams = new URLSearchParams(location.search);
      const urlLinefeature = queryParams.get('linefeature');
      const existingFilter = Cookies.get(`${authData}_filter_line`);
      if (existingFilter) {
        const filterObj = JSON.parse(existingFilter);
        setSelectedCategory(filterObj.features)
      }
      if (urlLinefeature) {
        setSelectedCategory(urlLinefeature);
      }
    }
  }, [authData]);
  useEffect(() => {
    const labels = datas.map((data) => data.Day);
    const dataPoints = datas.map((data) => parseInt(data[selectedCategory], 10));
    setChartData({
      labels: labels,
      datasets: [
        {
          label: `Trend for Category ${selectedCategory}`,
          data: dataPoints,
          borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        },
      ],
    });
  }, [datas, selectedCategory]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    Cookies.set(
      `${authData}_filter_line`,
      JSON.stringify({ features: selectedCategory})
    );
  };

  return (
    <div className="text-black min-h-7">
      <Line data={chartData} options={chartOptions} id="2" />
      <div>
        <select value={selectedCategory} onChange={handleChange}>
          {features.map((feature, index) => (
            <option key={index} value={feature}>
              {feature}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

LineChartComponent.propTypes = {
  datas: PropTypes.array.isRequired,
};

export default LineChartComponent;
