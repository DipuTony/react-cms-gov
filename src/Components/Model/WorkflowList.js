import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from 'axios'
import ListTable from "../ListTable/ListTable";
import { CgPlayListAdd } from 'react-icons/cg'
import ModalComponent from './ModalComponent'
import SingleView from "../News/SingleView";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WorkflowList({ title }) {  //Title Comes From Diffrent Master Pages using Props via tabs.js
    const toastMsg = (e) => toast(e);
    const [refreshData, setRefreshData] = useState(0);
    const [fetchAllData, setFetchAllData] = useState();

    const [togleModalCount, setTogleModalCount] = useState(0)
    const COLUMNS = [
        {
            Header: 'Sl No.',
            accessor: 'id'
        },
        {
            Header: 'Header.',
            accessor: 'header',
        },
        {
            Header: 'Body',
            accessor: 'news',
            style: { 'width': '20px' }
        },
        {
            Header: '',
            accessor: 'Archive',
            Cell: ({ cell }) => (
                <button onClick={() => archiveHandle(cell.row.values.id)} className='bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                    {/* View {cell.row.values.id} */}
                    Deactive
                </button>
            )
        },
        {
            Header: 'Action',
            accessor: 'idView',
            Cell: ({ cell }) => (
                <button onClick={() => setTogleModalCount((prev) => prev + 1)} className='bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black'>
                    {/* View {cell.row.values.id} */}
                    View
                </button>
            )
        },
        {
            Header: 'Actions',
            accessor: 'ids',
            Cell: ({ cell }) => (
                <button onClick={() => deleteHandle(cell.row.values.id)} className='bg-red-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white text-black'>
                    Delete
                </button>
            )
        }
    ]

    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get(`http://localhost:8000/${title}`);
    });

    const deleteHandle = (e) => {
        if (window.confirm("Delete the item?")) {
            axios.delete(`http://localhost:8000/${title}/${e}`)
            console.log("Delete", e)
            toastMsg('Data Deleted Successfully')
            setRefreshData(refreshData + 1)
        }

    }


    // useEffect(() => {
    //     fetch(`http://localhost:8000/news/1`)
    //         .then((response) => response.json())
    //         .then((res) => {
    //             setFetchAllData(data)
    //         })
    // }, [refreshData])


    console.log("Fetch All DAta",fetchAllData);



    const archiveHandle = (e) => {
        fetch(`http://localhost:8000/news/${e}`)
            .then((response) => response.json())
            .then((res) => {
                axios({
                    method: 'put',
                    url: `http://localhost:8000/news/${e}`,
                    data: {
                        header: res.header,
                        news: res.news,
                        date: res.date,
                        isArchived: 1,
                        ulbid: res.ulbid
                    }
                }).then(
                    //   setFetchData(""),
                    toastMsg('Data Updated Successfully')
                    //   setShowdata(showdata + 1)
                );

                // console.log("Deactivated", e)

            })
    }

    return (
        <>
            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTable columns={COLUMNS} dataList={data?.data}><button onClick={() => setTogleModalCount((prev) => prev + 1)} className="float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center"><CgPlayListAdd />Add</button></ListTable>}

            <ModalComponent openState={togleModalCount}>
                <SingleView id={1} />
                
            </ModalComponent>
        </>
    )
}

export default WorkflowList

/*
Exported to 
1. Tabs.js As ReactModel
*/