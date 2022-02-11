import React, { useState } from "react";

const defaultMovies = [
  {
    name: " ",
  },
];

const CostTable = () => {
  const [Movies, setMovies] = useState(defaultMovies);

  const handleMoviesChange = (event) => {
    const tempMovies = [...Movies];
    tempMovies[event.target.dataset.id][event.target.name] = event.target.value;

    setMovies(tempMovies);
  };

  const addNewMovies = () => {
    setMovies((prevMovies) => [...prevMovies, { name: "" }]);
  };

  // const getTotalCosts = () => {
  //   return costs.reduce((total, item) => {
  //     return total + Number(item.price);
  //   }, 0);
  // };

  return (
    <div className="table">
      <div className="table-title"> Movies you like to listen </div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row"></div>
        </div>
        <div className="table-body">
          {Movies.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleMoviesChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewMovies}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostTable;
