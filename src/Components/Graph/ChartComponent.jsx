// import { barOptions } from '../../Constants/Arrays';
// import React, { useEffect, useRef, useState } from 'react';
// import { features } from "../../Constants/Arrays";
// import {
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     Chart  } from "chart.js/auto";
//     import 'chart.js/auto';
// // Register the required components for Chart.js
// Chart.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // const ChartComponent = ({ datas,type,options ,id }) => {
// // //   const [chartData, setChartData] = useState({
// // //     labels: features,
// // //     datasets: [
// // //       {
// // //         label: 'Click Count',
// // //         data: [],
// // //         backgroundColor: 'white',
// // //       },
// // //     ],
// // //   });

// //   const canvasRef = useRef(null);
// //   const [selectedCategory, setSelectedCategory] = useState('A');
// //   const [currLabels,setCurrLabels] = useState(features);
// //   const calculateTotals = (data) => {
// //     return features.map(feature =>
// //       data.reduce((acc, item) => acc + parseInt(item[feature], 10), 0)
// //     );
// //   };
// //   const[totals,setTotals] = useState(0)
// //   useEffect(() => {
// //     if(id=="1")
// //     {
// //         const currentVal = calculateTotals(datas);
// //         setTotals(currentVal)
// //     }
// //     else
// //     {

// //         const labels = datas.map(data => data.Day);
// //         setCurrLabels(labels);
// //         const currentVal = datas.map(data => parseInt(data[selectedCategory], 10));
// //         setTotals(currentVal);
// //         console.log(datas)
// //     }

// //     const updateChartData = {
// //       labels: currLabels,
// //       datasets: [
// //         {
// //           label: 'Click Count',
// //           data: totals,
// //           backgroundColor: 'white',
// //         },
// //       ],
// //     };
// //     const ctx = canvasRef.current.getContext('2d');
// //     const chartInstance = new Chart(ctx, {
// //       type: type,
// //       data: updateChartData,
// //       options: options,
// //     });

// //     return () => {
// //       chartInstance.destroy();
// //     };
// //   }, [datas,type,options ,id ]);

// //   return (
// //     <div>
// //       <canvas ref={canvasRef} ></canvas>
// //     </div>
// //   );
// // };

// // export default ChartComponent;
// const ChartComponent = ({ datas, type, options, id }) => {
//     const canvasRef = useRef(null);
//     const chartRef = useRef(null);
//     const [selectedCategory, setSelectedCategory] = useState('A');
//     const calculateTotals = (data) => {
//             return features.map(feature =>
//               data.reduce((acc, item) => acc + parseInt(item[feature], 10), 0)
//             );
//           };
//     const calculateChartData = () => {
//       let labels;
//       let dataPoints;

//       if (id === "1") {
//         labels = features;
//         dataPoints = calculateTotals(datas);
//       } else {
//         labels = datas.map(data => data.Day);
//         dataPoints = datas.map(data => parseInt(data[selectedCategory], 10));
//       }

//       return {
//         labels: labels,
//         datasets: [
//           {
//             label: 'Click Count',
//             data: dataPoints,
//             backgroundColor: 'white',
//           },
//         ],
//       };
//     };

//     useEffect(() => {
//         if(datas!=null)
//         {
//             const chartData = calculateChartData();
//         }
//       console.log(chartData)
//       if (canvasRef.current  ) {
//         if(!chartRef.current){
//             chartRef.current.data = chartData;
//             chartRef.current.update();
//         }

//       } else {
//         const ctx = canvasRef.current.getContext('2d');
//         chartRef.current = new Chart(ctx, {
//           type: type,
//           data: chartData,
//           options: options,
//         });
//       }

//       return () => {
//         chartRef.current.destroy();
//       };
//     }, [datas, type, options, id, selectedCategory]);

//     return (
//       <div>
//         <canvas ref={canvasRef}></canvas>
//       </div>
//     );
//   };

//   export default ChartComponent;
import React from "react";

const ChartComponent = () => {
  return <div>ChartComponent</div>;
};

export default ChartComponent;
