import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import BodyAdminDash from "../AdminDashboard/BodyAdminDash";
import AddIcon from "@material-ui/icons/Add";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Paper from "@mui/material/Paper";
function TableRoom() {
  const [TableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    {
      title: "Room ID",
      field: "ID",
      sorting: true,
      align: "center",
      filtering: true,
      cellStyle: {
        // background: "#009688",
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Capacity",
      field: "CAPACITY",
      sorting: true,
      align: "center",
      filtering: true,
      cellStyle: {
        // background: "#009688",
        fontfamily: "corgette",
        height: 80,
        maxHeight: 80,
      },
      headerStyle: { color: "#fff" },
    },
  ];
  const exportAllSelectedRows = () => {
    const doc = new jsPDF();
    doc.text("Rooms", 20, 10);

    doc.autoTable({
      //head: ["Your total Bill is", sumOfCosts],
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),

      body: selectedRows,
    });

    doc.save("TableRoom.pdf");
  };
  useEffect(() => {
    fetch("https://withered-away-back-postgres.onrender.com" + "/api/room")
      .then((resp) => resp.json())
      .then((resp) => {
        setTableData(resp.data);
      });
  }, []);

  return (
    <div className="Rooms">
      <BodyAdminDash />
      <MaterialTable
        title="Rooms"
        data={TableData}
        columns={columns}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Export all selected rows",
            onClick: () => exportAllSelectedRows(),
            // isFreeAction:true
          },
        ]}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setTableData([...TableData, newData]);

                resolve();
              }, 500);

              axios
                .post(
                  "https://withered-away-back-postgres.onrender.com" + "/api/room",

                  newData
                )
                .then((response) => {
                  // alertService.success("User added",);
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...TableData];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setTableData([...dataUpdate]);

                resolve();
              }, 500);
              axios
                .patch(
                  "https://withered-away-back-postgres.onrender.com" + `/api/room/id/${newData.ID}`,
                  newData
                )
                .then((res) => {
                  // window.location.reload(false);
                });
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              let contactId = oldData.ID;
              setTimeout(() => {
                const dataDelete = [...TableData];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setTableData([...dataDelete]);

                resolve();
              }, 1000);
              let url = "https://withered-away-back-postgres.onrender.com" + `/api/room/${contactId}`;
              axios.delete(url).then((res) => {
                //     console.log("res", res);
              });
            }),
        }}
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
          pageSize: 10,
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

export default TableRoom;
