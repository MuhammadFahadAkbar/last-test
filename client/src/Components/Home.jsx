import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-[95%] mx-auto my-10 md:max-w-screen-xl md:my-20">
      <h4 className="mb-3 font-semibold text-center text-xl md:text-3xl md:mb-10 lg:text-4xl">
        LET US KNOW THE SECTORS YOU'RE WORKING IN
      </h4>
      <p className="text-justify pb-10 md:w-[90%] md:m-auto md:text-2xl md:font-light lg:w-[81%]">
        Our app makes it easy to connect with other professionals in your field,
        whether you're looking to expand your network, find new job
        opportunities, or simply exchange ideas and insights. With just a few
        clicks, you can create a profile highlighting your skills and
        experience, and start browsing through other users' profiles to find
        potential connections. Our platform also offers a range of tools and
        resources to help you stay up-to-date on industry news and trends, and
        connect with like-minded professionals through virtual events,
        discussions, and more. Whether you're a seasoned expert or just starting
        out in your career, our app is the perfect way to build your
        professional network and take your skills to the next level.
      </p>
      <div className="flex justify-center">
        <button className="px-5 py-3 mr-3 bg-black text-white md:py-3 md:px-20 md:text-lg md:mr-5">
          <Link to={`/form`}>FILL OUT OUR FORM</Link>
        </button>
        <button className="px-5 py-3 ml-3 bg-black text-white md:py-3 md:px-20 md:text-lg md:ml-5">
          <Link to={`/list`}>CHECK ENTRIES</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
