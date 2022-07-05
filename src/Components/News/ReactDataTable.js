import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'

const ReactDataTable = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filterdata, setFilterData] = useState([]);

    const getAllData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/news/");
            setData(response.data);
            setFilterData(response.data);
        } catch (error) {
            console.log(error)

        }
    }

    const column = [
        {
            name: "Header",
            selector: row => row.header,
            width : "10%",
            sortable: true
        },
        {
            name: "Body",
            selector: row => row.news,
            width : "10%",
            sortable: true
        },
        {
            name : "Edit",
            width : "10%",
            cell: row => <button className='p-2 bg-sky-200'>Edit</button>
        }
    ]


    useEffect(() => {
        getAllData();
    }, [])

    useEffect(() => {
        const result = data.filter((myData) => {
            return myData.header.toLowerCase().match(search.toLowerCase());
        });
        setFilterData(result);
    }, [search])

    return (
        <>
            <div>
                <DataTable
                    title="List of News"
                    columns={column}
                    data={filterdata}
                    pagination 
                    fixedHeader
                    fixedHeaderScrollHeight='200px'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    actions = {<button className='p-2 bg-sky-200'>Export</button>}
                    subHeader
                    subHeaderAlign='left'
                    subHeaderComponent={
                        <input 
                        type="text" 
                        placeholder='Search Here' 
                        className='border border-gray-300 rounded px-3' 
                        value={search}
                        onClick = {(e) => setSearch(e.target.value)}
                        />
                    }
                    />
            </div>
        </>
    )
}

export default ReactDataTable

/*
Export To -
1 Tabs.js
*/