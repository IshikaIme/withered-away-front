import React, { Component } from "react";
import "./Registration/forms.css";
import { NavigateHome } from "./NavigateHome";
import { ThemeProvider, createTheme } from "@mui/material";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultMaterialTheme = createTheme();

    return <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <NavigateHome />
      </ThemeProvider>
    </>
  }
}
