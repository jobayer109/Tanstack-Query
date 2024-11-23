import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchSinglePost } from "../API/api";
import LoadingPage from "./LoadingPage";

const SinglePost = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchSinglePost(id),
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const { title, body } = data;
  return (
    <div className="w-3/4 mx-auto py-12 px-20 relative">
      <div className="space-y-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {title}
        </h1>
        <p className="text-xl text-gray-600">{body}</p>
      </div>
      <div className="absolute -inset-20 flex justify-end items-center opacity-30">
        <span className="text-[20rem] font-extrabold text-gray-300">{id}</span>
      </div>
      <Link to={"/rq"} className="absolute top-4 left-4">
        <button
          type="button"
          className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default SinglePost;
