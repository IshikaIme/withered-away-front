import React from "react";
//import data from "./sampledata.json";
import TableData from "./Tabledata";
export class PassforInsert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  render() {
    return <div>{<TableData />}</div>;
  }

  //   componentDidMount() {
  //     fetch("http://localhost:8080/api/people")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result.data);
  //         this.setState({
  //           items: result.data,
  //         });
  //       });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         {" "}
  //         <Tabledata ={this.items} />
  //       </div>
  //     );
  //   }
}
