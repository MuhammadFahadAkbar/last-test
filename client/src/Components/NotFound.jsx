import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto my-10 max-w-screen-xl text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600">404</h1>
      <p className="text-md sm:text-lg md:text-xl mb-5 text-red-600">PAGE NOT FOUND</p>

      <button className="px-10 py-3 bg-red-900 text-white md:py-3 sm:px-20 sm:text-lg">
        <Link to={`/`}>HOME</Link>
      </button>
    </div>
  );
};

export default NotFound;
