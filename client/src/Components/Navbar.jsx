import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-100 max-w-screen-xl mx-auto text-center py-3 md:py-4 lg:py-5">
        <Link to="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
            Test Project
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
