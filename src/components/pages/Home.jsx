import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-12 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-gray-900 sm:text-8xl lg:text-9xl">
          React Query
        </h1>
        <p className="text-2xl text-gray-600 sm:text-3xl lg:text-4xl mt-4 sm:mt-6 lg:mt-8">
          A Data Fetching and Caching Library for React
        </p>
        <Link to={"/rq"}>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
