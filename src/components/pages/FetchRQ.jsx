import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../API/api";

const FetchRQ = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
    gcTime: 1000,
    staleTime: 10000,
  });

  return (
    <div className="max-w-7xl mx-auto pb-16 px-4 sm:py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Posts
      </h1>

      {data && (
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((post) => (
            <li
              key={post.id}
              className="flex flex-col border border-gray-300 rounded-lg"
            >
              <div className="flex-1 bg-white rounded-tl-lg rounded-tr-lg p-6">
                <div className="flex items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">{post.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchRQ;
