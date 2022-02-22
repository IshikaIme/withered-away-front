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
import BodyDoctorDash from "./BodyDoctorDash";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
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
});
// const axios = require("axios");
export default function SeeRequestedAppointments() {
  const id = localStorage.getItem("id");
  const [item, setItem] = useState([]);

  const classes = useStyles();
  useEffect(() => {
    fetch(
      `http://localhost:8080/api/people/id/appointment/people_id/doctor_id/${id}`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data);
      });
  }, []);
  const columns = [
    // {
    //   title: "ID",
    //   field: "ID",
    //   editable: "never",
    //   sorting: true,
    //   align: "center",
    //   filtering: true,
    //   cellStyle: {
    //     // background: "#009688",
    //     fontfamily: "corgette",
    //     height: 80,
    //     maxHeight: 80,
    //   },
    //   headerStyle: { color: "#fff" },
    // },

    {
      title: "REQUESTED DATE",
      field: "APPOINTED_DATE",
      sorting: true,
      align: "center",
      type: "date",
      filtering: true,
      cellStyle: {
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },
      headerStyle: { color: "#fff" },
    },

    {
      title: "PATIENT NAME",
      field: "NAME",
      sorting: true,
      editable: "never",
      align: "center",
      filtering: true,
      cellStyle: {
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },
      headerStyle: { color: "#fff" },
    },
    {
      title: "ACCEPTED",
      field: "ACCEPTED",
      sorting: true,
      align: "center",
      filtering: true,
      cellStyle: {
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },
      type: "option",
      lookup: {
        T: "Accepted",
        F: "Pending",
      },
      headerStyle: { color: "#fff" },
    },
    {
      title: "REASON",
      field: "REASON",
      sorting: true,
      editable: "never",
      align: "center",
      filtering: true,
      cellStyle: {
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },

      headerStyle: { color: "#fff" },
    },
  ];
  console.log(item);
  console.log();
  // var current = new Date();
  const filtereditem = item.filter(
    (it) => it.DOCTOR_ID == id && it.ACCEPTED == "F"
  );

  return (
    <div className={classes.root}>
      <BodyDoctorDash />
      <div className={classes.basic}>
        <MaterialTable
          title="Appointments"
          data={filtereditem}
          columns={columns}
          // components={{
          //   Toolbar: (props) => (
          //     <div
          //       style={{
          //         display: "flex",
          //         justifyContent: "flex-end",
          //         alignItems: "center",
          //       }}
          //     >
          //       <Button
          //         style={{ height: "fit-content" }}
          //         color="primary"
          //         variant="contained"
          //       >
          //         Quotations
          //       </Button>
          //     </div>
          //   ),
          //   Container: (props) => <Paper {...props} elevation={8} />,
          // }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...filtereditem];
                  if (oldData.filtereditem) {
                    const index = oldData.filtereditem.id;
                    dataUpdate[index] = newData;
                  }
                  setItem([...dataUpdate]);

                  resolve();
                }, 500);
                console.log(newData);
                axios
                  .patch(
                    `http://localhost:8080/api/appointment/id/${newData.ID_1}`,
                    newData
                  )
                  .then((res) => {
                    window.location.reload();
                    // window.location.reload(false);
                  });
              }),

            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                let contactId = oldData.ID_1;
                setTimeout(() => {
                  const dataDelete = [...filtereditem];
                  if (oldData.filtereditem) {
                    const index = oldData.filtereditem.id;
                    dataDelete.splice(index, 1);
                  }
                  setItem([...dataDelete]);

                  resolve();
                }, 500);
                let url = `http://localhost:8080/api/appointment/${contactId}`;
                axios.delete(url).then((res) => {
                  //     console.log("res", res);
                });
                window.location.reload();
              }),

            // onRowDelete: (oldData) =>
            //   new Promise((resolve, reject) => {
            //     let contactId = oldData.ID_1;
            //     setTimeout(() => {
            //       let dataDelete = [...filtereditem];
            //       if (oldData.item) {
            //         const index = oldData.item.id;
            //         dataDelete.splice(index, 1);
            //       }

            //       setItem([...dataDelete]);

            //       resolve();
            //     }, 500);
            //     console.log(contactId);
            //     let url = `http://localhost:8080/api/appointment/id/${contactId}`;
            //     axios.delete(url).then((res) => {
            //       //     console.log("res", res);
            //     });
            //     window.location.reload();
            //   }),
          }}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
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
