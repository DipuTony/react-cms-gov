import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from 'axios'
import ListTable from "../ListTable/ListTable";
import { CgPlayListAdd } from 'react-icons/cg'
import ModalComponent from './ModalComponent'
import SingleView from "../News/SingleView";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WorkflowList({ title }) {
    const toastMsg = (e) => toast(e);
    const [refreshData, setRefreshData] = useState(0);
    
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
        axios.delete(`http://localhost:8000/${title}/${e}`)
        console.log("Delete", e)
        toastMsg('Data Updated Successfully')
        setRefreshData(refreshData + 1)

    }

    return (
        <>
            {isLoading && <h1>Looading ...</h1>}
            {!isLoading && <ListTable columns={COLUMNS} dataList={data?.data}><button onClick={() => setTogleModalCount((prev) => prev + 1)} className="float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center"><CgPlayListAdd />Add</button></ListTable>}

            <ModalComponent openState={togleModalCount}>
                <SingleView id={1} />
                {/* <div className="p-10">
                    
                <form>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                </div> */}
            </ModalComponent>
        </>
    )
}

export default WorkflowList

/*
Exported to 
1. Tabs.js As ReactModel
*/