import DataTable from "react-data-table-component";
import { getCustomerInfo } from "../../API/getCustomerInfo";
import { useEffect, useState } from "react";
import { Container } from "../index";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO, isWithinInterval } from "date-fns";
import useCookie from "../../Hooks/useCookie";
import { filterBtns, columns } from "../../Constants/Arrays";

const TableComponent = () => {
  const [customerInfo, setCustomerInfo] = useState([[]]);
  const [filterCustomer, setFilterCustomer] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    getCustomerInfo().then((res) => setCustomerInfo(res));
    getCustomerInfo().then((res) => setFilterCustomer(res));
  }, []);
  const filterInfo = (Filter) => {
    if (Filter === "All") {
      setFilterCustomer(customerInfo);
      return;
    }
    if (Filter === "Male") {
      const filterData = filterCustomer.filter((row) => {
        return row.Gender === Filter;
      });
      setFilterCustomer(filterData);
    }
    if (Filter === "Female") {
      const filterData = filterCustomer.filter((row) => {
        return row.Gender === Filter;
      });
      setFilterCustomer(filterData);
    }
    if (Filter === "15-25") {
      const filterData = filterCustomer.filter((row) => {
        return row.Age === Filter;
      });
      setFilterCustomer(filterData);
    }
    if (Filter === ">25") {
      const filterData = filterCustomer.filter((row) => {
        return row.Age === Filter;
      });
      setFilterCustomer(filterData);
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const filtered = filterCustomer.filter((item) => {
        const dateParts = item.Day.split("/");
        const day = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        return isWithinInterval(day, { start, end });
      });
      setFilterCustomer(filtered);
    } else {
      setFilterCustomer(filterCustomer); // Reset if no date range is selected
    }
  };
  return (
    <>
      <Container>
        <div>
          {filterBtns.map((value) => (
            <button
              key={value.name}
              onClick={() => filterInfo(value.type)}
              className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            >
              {value.name}
            </button>
          ))}
        </div>
      </Container>
      <Container>
        <label
          htmlFor="select-date"
          className="text-white text-sm font-semibold mb-2"
        >
          Start Date:
        </label>
        <DatePicker
          showIcon
          selected={startDate}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          isClearable={true}
          className="text-black"
        />
      </Container>

      <Container>
        <DataTable columns={columns} data={filterCustomer}></DataTable>
      </Container>
    </>
  );
};

export default TableComponent;
