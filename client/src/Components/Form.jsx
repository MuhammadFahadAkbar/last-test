import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [sectorOptions, setSectorOptions] = useState(null);
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState([]);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSectors = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sectors/");
      const json = await response.json();
      if (response.ok) {
        setSectorOptions(json);
      }
    };
    fetchSectors();
  }, []);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const entry = {
      name,
      sectors,
      agree,
    };
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forms/", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setName("");
      setSectors("");
      setAgree(false);
      console.log("new workout added:", json);
      navigate("/list");
    }
  };

  return (
    <div className="max-w-[90%] m-auto font-poppins my-5 sm:max-w-screen-sm md:max-w-screen-xl">
      <form
        onSubmit={handleSubmit}
        className="p-6 mx-auto shadow-custom border-[1px] md:p-12 md:max-w-screen-sm lg:max-w-screen-md"
      >
        <h3 className="w-[98%] text-center m-auto font-semibold mb-5 md:text-center md:font-semibold md:text-xl md:mb-10 md:w-[80%] lg:text-2xl">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h3>
        <label htmlFor="name" className="text-lg md:text-xl">
          NAME:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className=" w-[70%] ml-7 mb-5 border border-black rounded md:py-3 md:px-4 focus:outline-none focus:bg-white focus:border-green-600 md:ml-14 md:mb-8 md:w-[64%]"
        />
        <br />
        <label htmlFor="sectors" className="text-lg  md:text-xl">
          SECTORS:
        </label>
        <br />
        <select
          multiple
          id="sectors"
          value={sectors}
          onChange={(e) => {
            const selectedOptions = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );
            setSectors(selectedOptions);
          }}
          className="w-[70%] ml-20 mb-5 border border-black rounded md:py-3 md:px-4 focus:outline-none focus:bg-white focus:border-green-600 md:ml-[7rem] md:mb-8 md:w-[64%]"
        >
          {sectorOptions?.map((sector) => (
            <option key={sector.value} value={sector.text}>
              {sector.text}
            </option>
          ))}
        </select>
        <br />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)}
            required
            className="w-5 h-5 -2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <span className="text-md md:text-xl font-light ml-4">
            I agree to the terms and conditions
          </span>
        </div>
        <br />
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-20 text-lg bg-black text-white"
          >
            SUBMIT
          </button>
        </div>
        {error && (
          <div className="mt-8 text-center text-red-500 py-3 px-5 bg-red-200 border border-red-500">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
