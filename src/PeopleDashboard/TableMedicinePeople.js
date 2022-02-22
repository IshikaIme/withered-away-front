import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import BodyPeopleDash from "../PeopleDashboard/BodyPeopleDash";
import AddIcon from "@material-ui/icons/Add";
import Button from "@mui/material/Button";
import { CsvBuilder } from "filefy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import jsPDF from "jspdf";
import "jspdf-autotable";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TableMedicinePeople() {
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const id = localStorage.getItem("id");
  const [item, setItem] = useState([]);
  const columns = [
    {
      title: "Name",
      field: "NAME",
      sorting: true,
      filtering: true,
      // cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },

    {
      title: "Cost",
      field: "COST",
      align: "center",
      type: "currency",

      grouping: false,
      filterPlaceholder: "filter",
    },
  ];
  //   const handleBulkDelete = () => {
  //     const updatedData = TableData.filter((row) => !selectedRows.includes(row));
  //     setTableData(updatedData);
  //   };
  //   const exportAllSelectedRows = () => {
  //     new CsvBuilder("tableData.csv")
  //       .setColumns(columns.map((col) => col.title))
  //       .addRows(
  //         selectedRows.map((rowData) => columns.map((col) => rowData[col.field]))
  //       )
  //       .exportFile();
  //   };
  useEffect(() => {
    fetch(`http://localhost:8080/api/account/people_id/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data[0]);
      });
  }, []);
  var allcost = [null];
  var sumOfCosts = 0;
  var i = 0;
  var x = 0;

  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState("");
  const [dialogTitle, setDialogTitle] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };
  const [costOfMedicine, setCostOfMedicine] = useState();
  const BuyAll = () => {
    selectedRows.map((row) => (allcost[i++] = row.COST));
    console.log(allcost);
    while (allcost[x] != null) {
      sumOfCosts = sumOfCosts + allcost[x];
      x++;
    }
    setCostOfMedicine(sumOfCosts);
    console.log(sumOfCosts);
    if (sumOfCosts > item.BALANCE) {
      // snackbar
      setAlertType("error");
      setAlertMsg(
        `Insufficient Balance. Your bill is total ${sumOfCosts} and you have ${item.BALANCE}`
      );
      setAlertOpen(true);
      console.log("Insufficient Balance");
    } else {
      // dialog box
      setDialogTitle("Are you sure?");
      setDialogMsg(
        `Your bill is total ${sumOfCosts} and you have ${
          item.BALANCE
        }. After purchasing you'll have ${item.BALANCE - sumOfCosts}`
      );
      setDialogOpen(true);
    }
  };
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Your Bill", 20, 10);

    doc.autoTable({
      //head: ["Your total Bill is", sumOfCosts],
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),

      body: selectedRows,
    });

    doc.save("Bill.pdf");
  };

  // new CsvBuilder("Bill.csv")
  //   .setColumns(columns.map((col) => col.title))
  //   .addRows(
  //     selectedRows.map((rowData) => columns.map((col) => rowData[col.field]))
  //   )
  //   .exportFile();

  //   const downloadPdf = () => {
  //     const doc = new jsPDF();
  //     doc.text("Student Details", 20, 10);
  //     doc.autoTable({
  //       theme: "grid",
  //       columns: columns.map((col) => ({ ...col, dataKey: col.field })),
  //       body: TableData,
  //     });
  //     doc.save("table.pdf");
  //   };
  useEffect(() => {
    fetch("http://localhost:8080/api/medicine")
      .then((resp) => resp.json())
      .then((resp) => {
        const r = resp.data.filter((d) => d.COST !== null);
        setTableData(r);
      });
  }, []);

  return (
    <div className="Medicines">
      <BodyPeopleDash />
      <MaterialTable
        title="Medicines"
        data={tableData}
        columns={columns}
        actions={[
          //   {
          //     icon: "delete",
          //     tooltip: "Delete all selected rows",
          //     onClick: () => handleBulkDelete(),
          //   },
          {
            icon: () => <AddShoppingCartIcon />,
            tooltip: "Buy selected Items",
            onClick: () => BuyAll(),
          },
          //   {
          //     icon: () => <GetAppIcon />,
          //     tooltip: "Export all selected rows",
          //     onClick: () => exportAllSelectedRows(),
          //   },
        ]}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({}),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        icons={{ Add: () => <AddIcon /> }}
      />
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(event, reason) => {
              setDialogOpen(false);
            }}
          >
            NO
          </Button>
          <Button
            onClick={(event, reason) => {
              setDialogOpen(false);
              axios
                .patch(`http://localhost:8080/api/account/people_id/${id}`, {
                  BALANCE: item.BALANCE - costOfMedicine,
                })
                .then((res) => {
                  console.log(item.BALANCE - costOfMedicine);
                  var medics = selectedRows.map((row) => row.NAME.trim());
                  //console.log(medics.join(","));
                  axios
                    .post(`http://localhost:8080/api/transactions`, {
                      BANK_ACCOUNT_NO: item.BANK_ACCOUNT_NO,
                      PEOPLE_ID: id,
                      TRX_TYPE: "BUYING MEDICINE",
                      DETAILS: "Buying Medicine " + medics.join(","),
                      TRX_DATE: new Date(),
                      AMOUNT: costOfMedicine.toString(),
                      IN_OUT: "OUT",
                    })
                    .then((res) => {
                      // window.location.reload(false);
                    });
                  // window.location.reload(false);
                });
              downloadPdf();
            }}
            autoFocus
          >
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
