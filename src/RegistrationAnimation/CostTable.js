import React, { useState } from "react";
// import { Route, Switch } from "react-router";
const defaultGames = [
  {
    name: " ",
  },
];

const CostTable = () => {
  const [Games, setGames] = useState(defaultGames);

  const handleGamesChange = (event) => {
    const tempGames = [...Games];
    tempGames[event.target.dataset.id][event.target.name] = event.target.value;

    setGames(tempGames);
  };

  // let routes = (
  //   <div>
  //     <Switch>
  //       <Route path="/login">
  //         <LoginAdmin />
  //       </Route>
  //       <Route path="/HomeAni">
  //         <HomeAni />
  //       </Route>
  //       <Route>
  //         <NoMatch />
  //       </Route>
  //     </Switch>
  //   </div>
  // );
  const addNewGames = () => {
    setGames((prevGames) => [...prevGames, { name: "" }]);
  };

  // const getTotalCosts = () => {
  //   return costs.reduce((total, item) => {
  //     return total + Number(item.price);
  //   }, 0);
  // };

  return (
    <div className="table">
      <div className="table-title"> Games You Like to Play </div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row"></div>
        </div>
        <div className="table-body">
          {Games.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleGamesChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewGames}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostTable;
