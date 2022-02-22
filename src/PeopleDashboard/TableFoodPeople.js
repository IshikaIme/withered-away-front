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

function TableFoodPeople() {
  const [TableData, setTableData] = useState([]);
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
      title: "Food type",
      field: "FOOD_TYPE",
      align: "center",
      grouping: true,
      filterPlaceholder: "filter",
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

  useEffect(() => {
    fetch(`http://localhost:8080/api/account/people_id/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data[0]);
      });
  }, []);

  console.log(item.BALANCE);
  var allcost = [null];
  var sumOfCosts = 0;
  var i = 0;
  var x = 0;

  const BuyAll = () => {
    selectedRows.map((row) => (allcost[i++] = row.COST));
    console.log(allcost);
    while (allcost[x] != null) {
      sumOfCosts = sumOfCosts + allcost[x];
      x++;
    }
    console.log(sumOfCosts);
    if (sumOfCosts >= item.BALANCE) {
      console.log("Insufficient Balance");
    } else {
      downloadPdf();
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
  useEffect(() => {
    fetch("http://localhost:8080/api/food")
      .then((resp) => resp.json())
      .then((resp) => {
        setTableData(resp.data);
      });
  }, []);

  return (
    <div className="TableFood">
      <BodyPeopleDash />
      <MaterialTable
        title="Food"
        data={TableData}
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
        //         Buy
        //       </Button>
        //     </div>
        //   ),
        //   Container: (props) => <Paper {...props} elevation={8} />,
        // }}
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

export default TableFoodPeople;
