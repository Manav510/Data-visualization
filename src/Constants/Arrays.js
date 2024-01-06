export const filterBtns = [
    {
      name: "All",
      type: "All",
    },
    {
      name: "Male",
      type: "Male",
    },
    {
      name: "Female",
      type: "Female",
    },
    {
      name: "15-25",
      type: "15-25",
    },
    {
      name: "Above 25",
      type: ">25",
    },
  ];
  export const columns = [
    {
      name: "Day",
      selector: (row) => row.Day,
    },
    {
      name: "Age",
      selector: (row) => row.Age,
    },
    {
      name: "Gender",
      selector: (row) => row.Gender,
    },
    {
      name: "A",
      selector: (row) => row.A,
    },
    {
      name: "B",
      selector: (row) => row.B,
    },
    {
      name: "C",
      selector: (row) => row.C,
    },
    {
      name: "D",
      selector: (row) => row.D,
    },
    {
      name: "E",
      selector: (row) => row.E,
    },
    {
      name: "F",
      selector: (row) => row.F,
    },
  ];

  export const features = ['A', 'B', 'C', 'D', 'E', 'F'];
  export const  barOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Click Count by Feature',
      },
    },
  }
  export const lineChartOptions = {
    responsive: true,
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy'
        },
        pan: {
          enabled: true,
          mode: 'xy'
        }
      }
    }
  };