import React from "react";

export default function Loaders(props) {
  const { data } = props;
  return <li> {data.name} </li>;
}
