import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import BodyStaffDash from "./BodyStaffDash";
import AddIcon from "@material-ui/icons/Add";

function ScheduleStaff() {
  const [TableData, setTableData] = useState([]);
  const id = localStorage.getItem("id");
  const columns = [
    // {
    //   title: "ID",
    //   field: "STAFF_ID",
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
      title: "Day",
      field: "DAY",
      sorting: true,
      filtering: true,
      grouping: true,
      filterPlaceholder: "filter",
      // cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" },
    },

    {
      title: "Reporting Time",
      field: "REPORTING_TIME",
      align: "center",
      grouping: true,
      filterPlaceholder: "filter",
    },
    {
      title: "Leaving Time",
      field: "LEAVING_TIME",
      align: "center",

      grouping: true,
      filterPlaceholder: "filter",
    },
    {
      title: "Room_id",
      field: "ROOM_ID",
      align: "center",

      grouping: true,
      filterPlaceholder: "filter",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8080/api/staff_schedule")
      .then((resp) => resp.json())
      .then((resp) => {
        setTableData(resp.data);
      });
  }, []);
  console.log(id);
  const filtereditem = TableData.filter((it) => it.STAFF_ID == id);
  return (
    <div className="Staff Schedule">
      <BodyStaffDash />
      <MaterialTable
        title="Staff Schedule"
        data={filtereditem}
        columns={columns}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          },
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          editing: false,
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

export default ScheduleStaff;
