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
            "http://localhost:8000/news/14"
        )
            .then((res) => res.data),
    );
    //   console.log(data)

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <div>
                <h1 className="">{data.header}</h1>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: data.news }} />;
            </div>
            <div>
                <h1>{data.date}</h1>
            </div>
            {
      /* <h1>{data.info.id}</h1>
      <p>{data.description}</p>
      <strong>🍴 {data.forks_count}</strong> */}
            <div>{isFetching ? "Updating..." : ""}</div>
        </div>
    );
}