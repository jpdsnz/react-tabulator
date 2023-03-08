import { useState, useEffect } from "react";
import { ReactTabulator } from "react-tabulator";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";
import axios from "axios";
import React from 'react'
//import { Tabulator } from "react-tabulator/lib/types/TabulatorTypes";

function Tabo() {

    const [tableData, setTableData] = useState([]);
  
  const columns = [
    { title: "Name", field: "name" },
    { title: "Age", field: "age", align: "left" },
    { title: "Gender", field: "gender", align: "left" },
    { title: "Email", field: "email", align: "left" },
  ];
    
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setTableData(response.data);
      //console.log(response.data);
    });
  }, []);

//   useEffect(() =>{
//         var table = new Tabulator("#example-table", {
//             data: tableData, 
//             layout:"fitColumns",
//             columns: columns,
//         });
//   }, [columns, tableData]);

  return (
    <div className="textColor">
      <ReactTabulator data={tableData} columns={columns} />
    </div>
  );
  
}

export default Tabo