import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import BodyPeopleDash from "../PeopleDashboard/BodyPeopleDash";
import AddIcon from "@material-ui/icons/Add";
import { CsvBuilder } from "filefy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import jsPDF from "jspdf";
import "jspdf-autotable";
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

  const BuyAll = () => {
    selectedRows.map((row) => (allcost[i++] = row.COST));
    console.log(allcost);
    while (allcost[x] != null) {
      sumOfCosts = sumOfCosts + allcost[x];
      x++;
    }
    console.log(sumOfCosts);
    if (sumOfCosts > item.BALANCE) {
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
    </div>
  );
}
