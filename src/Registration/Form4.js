import React from "react";
import ReactDOM from "react-dom";

// import "./Form.scss";
import "./form1.css";
import axios from "axios";
export class Form4 extends React.Component {
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
          <div className="Header">4.Entertainment </div>

          <div className="Content">
            <label htmlFor="song"> A. Songs you like to listen: </label>
            <input
              type="text"
              name="song1"
              placeholder="song1"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song2"
              placeholder="song2"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song3"
              placeholder="song3"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song4"
              placeholder="song4"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song5"
              placeholder="song5"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song6"
              placeholder="song6"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song7"
              placeholder="song7"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song8"
              placeholder="song8"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song9"
              placeholder="song9"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="song10"
              placeholder="song10"
              onChange={this.changeHandler}
            />

            <label htmlFor="movie"> B. Movies you like to watch: </label>
            <input
              type="text"
              name="movie1"
              placeholder="movie1"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie2"
              placeholder="movie2"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie3"
              placeholder="movie3"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie4"
              placeholder="movie4"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie5"
              placeholder="movie5"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie6"
              placeholder="movie6"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie7"
              placeholder="movie7"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie8"
              placeholder="movie8"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie9"
              placeholder="movie9"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="movie10"
              placeholder="movie10"
              onChange={this.changeHandler}
            />

            <label htmlFor="game"> C. Games you like to play: </label>
            <input
              type="text"
              name="game1"
              placeholder="game1"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game2"
              placeholder="game2"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game3"
              placeholder="game3"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game4"
              placeholder="game4"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game5"
              placeholder="game5"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game6"
              placeholder="game6"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game7"
              placeholder="game7"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game8"
              placeholder="game8"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game9"
              placeholder="game9"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="game10"
              placeholder="game10"
              onChange={this.changeHandler}
            />
          </div>

          <div className="footer">
            <button type="submit " className="save">
              Save
            </button>

            <button type="button" className="next">
              <a href="/form5">Next</a>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
