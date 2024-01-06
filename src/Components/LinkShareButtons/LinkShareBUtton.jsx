import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {Button} from "../index";
const LinkShareBUtton = () => {
  const authData = useSelector((state) => state.auth.userData?.$id);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("A");
  useEffect(() => {
    if (authData) {
      const existingFilter = Cookies.get(`${authData}_filter`);
      if (existingFilter) {
        const filterObj = JSON.parse(existingFilter);
        setSelectedGender(filterObj.gender);
        setSelectedAge(filterObj.age);
      }
      const existingLineFilter = Cookies.get(`${authData}_filter_line`);
      if (existingLineFilter ) {
        const filterObj = JSON.parse(existingLineFilter);
        setSelectedCategory(filterObj.features)
      }
    }
  }, [authData]);
  const createShareableLink = () => {
    const queryParams = new URLSearchParams({
      gender: selectedGender,
      age: selectedAge,
      linefeature: selectedCategory,
    });
    return `${window.location.origin}/Graphs?${queryParams.toString()}`;
  };
  const handleShare = () => {
    const url = createShareableLink();
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    }, (err) => {
      console.error("Error copying link to clipboard", err);
    });
  };
  return (
    <div>
      <Button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={handleShare}
      >
        Share Chart
      </Button>
    </div>
  );
};

export default LinkShareBUtton;
