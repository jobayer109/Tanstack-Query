import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deletePost, fetchAllPosts, updatePost } from "../API/api";
import LoadingPage from "../UI/LoadingPage";

const FetchRQ = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  // Get all posts
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchAllPosts(page),
    gcTime: 1000,
    staleTime: 10000,
    placeholderData: keepPreviousData,
  });

  // Delete a post
  const handleDeletePost = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", page], (old) => {
        return old.filter((post) => post.id !== id);
      });
    },
  });

  // Update a post
  const handleUpdatePost = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", page], (old) => {
        return old.map((post) => {
          return post.id === id ? { ...post, title: "Updated Title" } : post;
        });
      });
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto pb-16 px-4 sm:py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Posts
      </h1>

      <div className="my-2">
        <nav
          className="flex items-center justify-end gap-3"
          aria-label="Pagination"
        >
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-gray-400 rounded shadow mr-2"
          >
            Previous
          </button>
          <p className="text-xl leading-5 font-bold text-gray-900 mx-2">
            {page}
          </p>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={data.length < 3}
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded shadow ml-2"
          >
            Next
          </button>
        </nav>
      </div>

      {data && (
        <ul className="mt-12 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(({ id, title, body }) => (
            <li
              key={id}
              className="flex flex-col border border-gray-300 rounded-lg"
            >
              <NavLink to={`/rq/${id}`}>
                <div className="flex-1 bg-white rounded-tl-lg rounded-tr-lg p-6">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600">{body}</p>
                </div>
              </NavLink>

              <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-bl-lg rounded-br-lg shadow-sm">
                <button
                  onClick={() => handleDeletePost.mutate(id)}
                  type="button"
                  className="text-red-500 border border-red-400 px-4 py-2 rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdatePost.mutate(id)}
                  type="button"
                  className="text-red-500 border border-red-400 px-4 py-2 rounded-md hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchRQ;
