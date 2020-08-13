import React, { useState } from "react";
import data from "../data.json";
import Loader from "../components/loader";

export default function App() {
  console.log(data);
  const [loaderList, setLoaderList] = useState([]);
  const handleClick = () => {
    setLoaderList(data.loaders);
  };
  return (
    <div>
      <ul>
        {loaderList.map((item) => (
          <Loader data={item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>Display Loaders</button>
      App in React
    </div>
  );
}
