import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import BodyAdminDash from "../AdminDashboard/BodyAdminDash";
import AddIcon from "@material-ui/icons/Add";

export default function TableMedicine() {
  const [TableData, setTableData] = useState([]);

  const columns = [
    {
      title: "ID",
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
      title: "Name",
      field: "NAME",
      sorting: true,
      filtering: true,
      // cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },
    {
      title: "Time",
      field: "TIME",
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
      title: "Cost",
      field: "COST",
      align: "center",
      type: "currency",

      grouping: false,
      filterPlaceholder: "filter",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/medicine")
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
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
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
                  "http://localhost:8080/api/medicine",

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
                  `http://localhost:8080/api/medicine/id/${newData.ID}`,
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
              let url = `http://localhost:8080/api/medicine/${contactId}`;
              axios.delete(url).then((res) => {
                //     console.log("res", res);
              });
            }),
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
