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
            to="/rq"
            className="hover:text-gray-300 transition duration-300 ease-in-out"
          >
            React Query
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
