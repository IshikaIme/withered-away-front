import List from "@mui/material/List";
import { useEffect, useState } from "react";
import moment from "react-moment";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { Component } from "react";
import axios from "axios";
import "react-edit-text/dist/index.css";
import { makeStyles } from "@material-ui/core/styles";
import { EditText, EditTextarea } from "react-edit-text";
import MaterialTable from "material-table";
import BodyPeopleDash from "./BodyPeopleDash";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  header: {
    marginBottom: "10 rem",
  },
  head: {
    fontSize: "1.5rem",
    marginRight: " 2.5rem",
  },
  btn: {
    height: "7vh",
    width: "7vh",
  },
  table: {
    height: "10vh",
    width: "10vh",
  },
});
// const axios = require("axios");
export default function Songs() {
  const id = localStorage.getItem("id");
  const [item, setItem] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/movie/id/movie_favorites/movie_id/people_id/${id}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data);
      });
  }, []);
  const columns = [
    // {
    //   title: "Movie ID",
    //   field: "MOVIE_ID",
    //   sorting: true,
    //   align: "center",
    //   filtering: true,
    //   cellStyle: {
    //     fontfamily: "corgette",
    //     height: 40,
    //     maxHeight: 40,
    //     width: 20,
    //     maxWidth: 20,
    //   },
    //   headerStyle: { color: "#fff" },
    // },

    {
      title: "Movie Name",
      field: "TITLE",
      sorting: true,
      align: "center",
      filtering: true,
      cellStyle: {
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
        width: 20,
        maxWidth: 20,
      },
      headerStyle: { color: "#fff" },
    },
  ];
  console.log(item);
  console.log();

  return (
    <div className={classes.root}>
      <BodyPeopleDash />
      <div className={classes.basic}>
        <MaterialTable
          className={classes.table}
          title="Your Movie Watchlist"
          data={item}
          columns={columns}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setItem([...item, newData]);

                  resolve();
                }, 500);
                const newItem = {
                  TITLE: newData.TITLE,
                };
                axios
                  .post(
                    `http://localhost:8080/api/movie/`,

                    newItem
                  )
                  .then((response) => {
                    // alertService.success("User added",);
                    console.log(response);

                    axios
                      .post(
                        `http://localhost:8080/api/movie_favorites/`,

                        { PEOPLE_ID: id, MOVIE_ID: response.data.ID }
                      )
                      .then((response) => {
                        // alertService.success("User added",);
                        console.log(response);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }),

            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                let contactId = oldData.ID;
                setTimeout(() => {
                  const dataDelete = [...item];
                  if (oldData.item) {
                    const index = oldData.item.id;
                    dataDelete.splice(index, 1);
                  }
                  setItem([...dataDelete]);

                  resolve();
                }, 1000);
                let url = `http://localhost:8080/api/movie_favorites/movie_id/${contactId}`;
                axios.delete(url).then((res) => {
                  //     console.log("res", res);
                });
                window.location.reload();
              }),
          }}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 10,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            // exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: (rowData) => ({
              // disabled: rowData.age == null,
              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
        />
      </div>
    </div>
  );
}
