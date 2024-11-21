import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-900 text-white py-4 px-10 flex justify-center">
    <nav className="container mx-auto flex justify-between">
      <Link to="/" className="text-3xl font-bold">
        React Query
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/trad"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            Trad
          </Link>
        </li>
        <li>
          <Link
            to="/rq"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            RQ
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
