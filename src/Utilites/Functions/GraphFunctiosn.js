import Cookies from "js-cookie";

export const applyFilter = (data, selectedGender, selectedAge, setFilterCustomer, authData) => {
    let filteredData = data;

    if (selectedGender) {
        filteredData = filteredData.filter(item => item.Gender === selectedGender);
    }
    if (selectedAge) {
        filteredData = filteredData.filter(item => item.Age === selectedAge);
    }

    setFilterCustomer(filteredData);

    // Save the filter to the cookie
    Cookies.set(`${authData}_filter`, JSON.stringify({ gender: selectedGender, age: selectedAge }));
};

export const resetPreferences = (authData, setFilterCustomer, customerInfo, setSelectedGender, setSelectedAge) => {
    Cookies.remove(`${authData}_filter`);
    setSelectedGender("");
    setSelectedAge("");
    setFilterCustomer(customerInfo);
};