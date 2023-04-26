import React from "react";

function topButtons() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 1,
      title: "Sydney",
    },
    {
      id: 1,
      title: "Tokey",
    },
    {
      id: 1,
      title: "Toronto",
    },
    {
      id: 1,
      title: "Paris",
    },
  ];

  return <div className="flex item-center justify-around my-6">{
    cities.map((city) => (
      <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
    ))
  }</div>;
}

export default topButtons;
