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
import Paper from "@mui/material/Paper";
function Transactions() {
  const id = localStorage.getItem("id");
  const [TableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    // {
    //   title: "ID",
    //   field: "ID",
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
      title: "History",
      field: "DETAILS",
      sorting: true,
      filtering: true,

      // cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },

    {
      title: "Amount",
      field: "AMOUNT",
      align: "center",
      type: "currency",
      cellStyle: {
        // background: "#009688",
        fontfamily: "corgette",
        height: 30,
        width: 20,
      },
      grouping: false,
      filterPlaceholder: "filter",
    },
    {
      title: "In or Out",
      field: "IN_OUT",
      align: "center",
      grouping: true,
      filterPlaceholder: "filter",
      type: "option",
      lookup: {
        IN: "was returned to your account",
        OUT: "was deducted from your account",
      },
    },
  ];

  const ExportSelected = () => {
    const doc = new jsPDF();
    doc.text("Your Transactions", 20, 10);

    doc.autoTable({
      //head: ["Your total Bill is", sumOfCosts],
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),

      body: selectedRows,
    });

    doc.save("Transactions.pdf");
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/transactions")
      .then((resp) => resp.json())
      .then((resp) => {
        setTableData(resp.data);
      });
  }, []);

  const filtereditem = TableData.filter((it) => it.PEOPLE_ID == id);
  return (
    <div className="TableData">
      <BodyPeopleDash />
      <MaterialTable
        title="Your Transaction History"
        data={filtereditem}
        columns={columns}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Export Selected Datas",
            onClick: () => ExportSelected(),
          },
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
        icons={{ Add: () => <AddIcon /> }}
      />
    </div>
  );
}

export default Transactions;
