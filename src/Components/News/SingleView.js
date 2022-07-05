import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";


export default function SingleView(props) {
    // const id  = props.id;
    console.log("The prio iddfgdfg is", props.id )

    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        axios.get(
            // `http://localhost:8000/news/${props.id}`
            `http://localhost:8000/news/3`
        )
            .then((res) => res.data),
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    if(!isLoading){
        return (
            <div className="border border-gray-300">
                <div className="p-5 bg-sky-200 text-center">
                    <h1 className="text-xl">{data.header}</h1>
                </div>
                <div className="p-5">
                    <div dangerouslySetInnerHTML={{ __html: data.news }} />
                </div>
                <div className="p-2 bg-green-200 font-bold text-right">
                    <h1>Published on : {data.date}</h1>
                </div>
                
                {/* <div>{isFetching ? "Updating..." : ""}</div> */}
            </div>
        );
    }
}