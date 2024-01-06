import BarChartComponent from "../BarChart/BarChartComponent";
import LineChartComponent from "../LineChart/LineChartComponent";
import { Container,Button } from "../index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isWithinInterval } from "date-fns";
import { getCustomerInfo } from "../../API/getCustomerInfo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import LinkShareBUtton from "../LinkShareButtons/LinkShareBUtton";
import { useLocation } from 'react-router-dom';
import GraphFilters from './ChartFilters';
const GraphComponent = () => {
  const authData = useSelector((state) => state.auth.userData?.$id);
  const [customerInfo, setCustomerInfo] = useState([[]]);
  const [filterCustomer, setFilterCustomer] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (authData) {
      const queryParams = new URLSearchParams(location.search);
      const urlGender = queryParams.get('gender');
      const urlAge = queryParams.get('age');
      const existingFilter = Cookies.get(`${authData}_filter`);
      if (existingFilter) {
        const filterObj = JSON.parse(existingFilter);
        setSelectedGender(filterObj.gender);
        setSelectedAge(filterObj.age);
        console.log(filterObj.start)
      }
      if (urlGender) {
        setSelectedGender(urlGender);
      }
      if (urlAge) {
        setSelectedAge(decodeURIComponent(urlAge)); // Decode URI component for age
      }
    }
  }, [authData]);

  useEffect(() => {
    getCustomerInfo().then((res) => {
      setCustomerInfo(res);
      applyFilter(res);
    });
  }, [selectedGender, selectedAge]);

  const applyFilter = (data) => {
    let filteredData = data;

    if (selectedGender) {
      filteredData = filteredData.filter(
        (item) => item.Gender === selectedGender
      );
    }
    if (selectedAge) {
      filteredData = filteredData.filter((item) => item.Age === selectedAge);
    }

    setFilterCustomer(filteredData);

    // Save the filter to the cookie
    Cookies.set(
      `${authData}_filter`,
      JSON.stringify({ gender: selectedGender, age: selectedAge})
    );
  };

  const resetPreferences = () => {
    Cookies.remove(`${authData}_filter`);
    setSelectedGender("");
    setSelectedAge("");
    setFilterCustomer(customerInfo);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    console.log(start,"2");
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const filtered = customerInfo.filter((item) => {
        const dateParts = item.Day.split("/");
        const day = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        return isWithinInterval(day, { start, end });
      });
      setFilterCustomer(filtered);
    } else {
      applyFilter(
        customerInfo,
        selectedGender,
        selectedAge,
        setFilterCustomer,
        authData
      );
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
        Graph Analytics
      </h2>

      <Container className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <Button
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() =>
            applyFilter(
              customerInfo,
              selectedGender,
              selectedAge,
              setFilterCustomer,
              authData
            )
          }
        >
          Apply Filters
        </Button>

        <Button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={() => {
            if (
              window.confirm("Are you sure you want to reset your preferences?")
            ) {
              resetPreferences();
            }
          }}
        >
          Reset Preferences
        </Button>
      </Container>
      <Container className="mb-4">
        <label
          htmlFor="select-date"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Start Date:
        </label>
        <DatePicker
          className="form-input rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          showIcon
          selected={startDate}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          isClearable={true}
        />
      </Container>
            <Container className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">

      <GraphFilters
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedAge={selectedAge}
          setSelectedAge={setSelectedAge}
        />
        </Container>
      <Container className="min-h-8">
        <BarChartComponent datas={filterCustomer} />
      </Container>
      <Container className="min-h-8">
        <LineChartComponent datas={filterCustomer} />
      </Container>
      <LinkShareBUtton />
    </div>
  );
};

export default GraphComponent;