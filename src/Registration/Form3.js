import React from "react";
import ReactDOM from "react-dom";

// import "./Form.scss";
import "./form1.css";
import axios from "axios";
export class Form3 extends React.Component {
  constructor(props) {
    super(props);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/reg/3", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="base-container">
        <form onSubmit={this.submitHandler}>
          <div className="Header">3.Health Information</div>

          <div className="Content">
            <div className="Form">
              <div className="Form-group-checkbox">
                <label htmlFor="disease">A. Diseases you might have: </label>
                <input type="checkbox" id="d1" onChange={this.changeHandler} />
                <label for="d1">Diabetes</label>

                <input type="checkbox" id="d2" onChange={this.changeHandler} />
                <label for="d2">Osteoporesis</label>

                <input type="checkbox" id="d3" onChange={this.changeHandler} />
                <label for="d3">Alzheimer's Disease</label>

                <input type="checkbox" id="d4" onChange={this.changeHandler} />
                <label for="d4">Parkinson's Disease</label>

                <input type="checkbox" id="d5" onChange={this.changeHandler} />
                <label for="d5">Arthritis</label>

                <input type="checkbox" id="d6" onChange={this.changeHandler} />
                <label for="d6">Heart Disease</label>

                <input type="checkbox" id="d7" onChange={this.changeHandler} />
                <label for="d7">Respiratory Disease</label>

                <input type="checkbox" id="d8" onChange={this.changeHandler} />
                <label for="d8">Tumour</label>

                <input type="checkbox" id="d9" onChange={this.changeHandler} />
                <label for="d9">Asthma</label>
              </div>

              <div className="Form-group-text">
                <label htmlFor="disease">B. Medicines you might take: </label>
                <input
                  type="text"
                  name="medicine1"
                  placeholder="medicine1"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine2"
                  placeholder="medicine2"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine3"
                  placeholder="medicine3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine4"
                  placeholder="medicine4"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine5"
                  placeholder="medicine5"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine6"
                  placeholder="medicine6"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine7"
                  placeholder="medicine7"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine8"
                  placeholder="medicine8"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine9"
                  placeholder="medicine9"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="medicine10"
                  placeholder="medicine10"
                  onChange={this.changeHandler}
                />

                <label htmlFor="height">C. Height in cm :</label>
                <input
                  type="text"
                  name="height"
                  placeholder="height"
                  required="required"
                  onChange={this.changeHandler}
                />

                <label htmlFor="weight">D. Weight in kg :</label>
                <input
                  type="text"
                  name="weight"
                  placeholder="weight"
                  required="required"
                  onChange={this.changeHandler}
                />

                <label htmlFor="blood">E. Blood Group :</label>
                <select id="blood" name="blood">
                  <option
                    value="O+"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    O+
                  </option>
                  <option
                    value="AB+"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    AB+
                  </option>
                  <option
                    value="A+"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    A+
                  </option>
                  <option
                    value="B+"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    B+
                  </option>
                  <option
                    value="AB-"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    AB-
                  </option>
                  <option
                    value="O-"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    O-
                  </option>
                  <option
                    value="A-"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    A-
                  </option>
                  <option
                    value="B-"
                    required="required"
                    onChange={this.changeHandler}
                  >
                    B-
                  </option>
                </select>

                <label htmlFor="vaccine"> F. Vaccines you've taken : </label>
                <input
                  type="text"
                  name="vaccine1"
                  placeholder="vaccine1"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine2"
                  placeholder="vaccine2"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine3"
                  placeholder="vaccine3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine4"
                  placeholder="vaccine4"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine5"
                  placeholder="vaccine5"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine6"
                  placeholder="vaccine6"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine7"
                  placeholder="vaccine7"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine8"
                  placeholder="vaccine8"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine9"
                  placeholder="vaccine9"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="vaccine10"
                  placeholder="vaccine10"
                  onChange={this.changeHandler}
                />

                <label htmlFor="disabilities">
                  {" "}
                  G. Disasbilities (If you have any) :{" "}
                </label>
                <input
                  type="text"
                  name="disabilities1"
                  placeholder="disabilities1"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities2"
                  placeholder="disabilities2"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities3"
                  placeholder="disabilities3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities4"
                  placeholder="disabilities4"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities5"
                  placeholder="disabilities5"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities6"
                  placeholder="disabilities6"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities7"
                  placeholder="disabilities7"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities8"
                  placeholder="disabilities8"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities9"
                  placeholder="disabilities9"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="disabilities10"
                  placeholder="disabilities10"
                  onChange={this.changeHandler}
                />

                <label htmlFor="allergies">
                  {" "}
                  H. Allergies (If you have any) :{" "}
                </label>
                <input
                  type="text"
                  name="allergies1"
                  placeholder="allergies1"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies2"
                  placeholder="allergies2"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies3"
                  placeholder="allergies3"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies4"
                  placeholder="allergies4"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies5"
                  placeholder="allergies5"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies6"
                  placeholder="allergies6"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies7"
                  placeholder="allergies7"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies8"
                  placeholder="allergies8"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies9"
                  placeholder="allergies9"
                  onChange={this.changeHandler}
                />
                <input
                  type="text"
                  name="allergies10"
                  placeholder="allergies10"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="footer">
            <button type="submit " className="save">
              Save
            </button>

            <button type="button" className="next">
              <a href="/form4">Next</a>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
