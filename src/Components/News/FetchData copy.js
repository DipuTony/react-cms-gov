import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        axios.get(
            "http://localhost:8000/news"
        )
            .then((res) => res.data),
    );
    // console.log(data)
    if (isLoading) return "Loading...";
    if (error) return "An error has occurred: " + error.message;
    return (
        <div>
            {data.map((e, i) => (
                <div key={i}>
                    <span > &#x1F464; {e.header}</span>
                    <span>&#128073; {e.news}</span>
                    <span>&#128073; {e.date}</span>
                </div>
            ))}
            <div>{isFetching ? "Updating..." : ""}</div>
        </div>
    );
}

/*
Export To - 
1. ManageNews.js
*/