import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width:30 },
  { field: 'header', headerName: 'Title', width: 200 },
  { field: 'news', headerName: 'Body', width: 570 },
  { field: 'date', headerName: 'Added Date', width: 120 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

//   const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/news/")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

//   console.log(tableData);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
    </div>
  )
}

export default DataTable

/*
Export to -
1. Tabs.js
*/