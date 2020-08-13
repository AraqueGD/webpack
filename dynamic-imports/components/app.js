import React, { useState } from "react";
import data from "../data.json";
import Loader from "../components/loader";
import logo from "../images/platzi.png";
import video from "../video/que-es-core.mp4";

import "../sass/sass.scss";

export default function App() {
  console.log(data);
  const [loaderList, setLoaderList] = useState([]);
  async function handleClick() {
    setLoaderList(data.loaders);
    const { alerta } = await import("./alerta.js");
    alerta("OMG!!!!! DYNAMIC");
  }
  return (
    <div>
      <p className="sass">Holaaa soy Sass</p>
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
