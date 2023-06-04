import React from "react";

const Cars = () => {
  const carsDetails = [
    { id: 1, name: "Honda", color: "red" },
    { id: 2, name: "Toyota", color: "blue" },
    { id: 3, name: "Ford", color: "green" },
    { id: 4, name: "BMW", color: "yellow" },
  ];

  return (
    <div className="cars">
      <h2>Cars:</h2>
      <ul>
        {carsDetails.map((car) => (
          <li
            key={car.id}
            style={
              car.id % 2 === 0
                ? { color: "white", background: "#000" }
                : { color: "#000", background: "white" }
            }
          >
            {car.name} - {car.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
