import React, { useState } from "react";
import data from "../data.json";
import Loader from "../components/loader";
import logo from "../images/platzi.png";
import video from "../video/que-es-core.mp4";

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
      <video src={video} controls width="500"></video>
      <p>
        <img src={logo} alt="" width="40" />
      </p>
    </div>
  );
}
