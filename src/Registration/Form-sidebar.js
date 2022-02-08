import react from "react";
import "./form1.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";

export class Formsidebar extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Link to="/form1"></Link>

        <Link to="/form2"></Link>

        <Link to="/form3"></Link>

        <Link to="/form4"></Link>

        <Link to="/form5"></Link>

        <Routes>
          <Route exact path="/" element={<Form1 />}></Route>
          <Route exact path="/form1" element={<Form1 />}></Route>
          <Route exact path="/form2" element={<Form2 />}></Route>
          <Route exact path="/form3" element={<Form3 />}></Route>
          <Route exact path="/form4" element={<Form4 />}></Route>
          <Route exact path="/form5" element={<Form5 />}></Route>
        </Routes>
      </Router>
    );
  }
}
