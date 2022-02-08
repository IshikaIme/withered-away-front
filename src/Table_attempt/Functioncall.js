import Functiontest from "./Functiontest";
function Functioncall() {
  function Getdata() {
    alert("Hello everyone");
  }

  return (
    <div className="Functioncall">
      {/* <h1>Kam kore na baal da</h1> */}
      <Functiontest data={Getdata} />
    </div>
  );
}

export default Functioncall;
