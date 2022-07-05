import {useState} from 'react'
import ListTable from './ListTable'
import { useQuery } from "react-query";
import axios from 'axios'
import { format } from 'date-fns'


function ListTableParent() {
    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get("http://localhost:8000/news");
    });

    const COLUMNS = [

        {
            Header: 'Header.',
            accessor: 'header'
        },
        {
            Header: 'Body',
            accessor: 'news'
        },
        {
            Header: 'Action',
            accessor: 'id',
            Cell: ({ cell }) => (
                <button  className='bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                    {/* View {cell.row.values.id} */}
                    View
                </button>
            )
        }
    ]

    return (
        <>
        
           {isLoading && <h1>Looading ...</h1>}
           {!isLoading && <ListTable columns={COLUMNS} dataList={data?.data}/>}
        </>
    )
}

export default ListTableParent