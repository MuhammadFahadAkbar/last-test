import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState();
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);
  const [sectorOptions, setSectorOptions] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      const response = await fetch(`https://fahad-test-app-api.vercel.app/forms/${id}`);
      const json = await response.json();
      if (response.ok) {
        setForm(json);
        setName(json.name);
        setSectors(json.sectors);
      }
    };
    const fetchSectors = async () => {
      const response = await fetch("https://fahad-test-app-api.vercel.app/sectors/");
      const json = await response.json();
      if (response.ok) {
        setSectorOptions(json);
      }
    };
    fetchSectors();
    fetchForm();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://fahad-test-app-api.vercel.app/forms/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, sectors }),
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

  if (!form) {
    return (
      <div className="text-center text-3xl text-red-900 mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-[90%] m-auto font-poppins my-5 sm:max-w-screen-sm md:max-w-screen-xl">
      <form
        onSubmit={handleSubmit}
        className="p-6 mx-auto shadow-custom border-[1px] md:p-12 md:max-w-screen-sm lg:max-w-screen-md"
      >
        <h3 className="w-[98%] text-center m-auto font-semibold mb-5 md:text-center md:font-semibold md:text-xl md:mb-10 md:w-[80%] lg:text-2xl text-red-900">
          Please edit your name and pick the Sectors you are currently involved
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
          className=" w-[70%] ml-7 mb-5 border border-black rounded md:py-3 md:px-4 focus:outline-none focus:bg-white focus:border-red-600 md:ml-14 md:mb-8 md:w-[64%]"
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
          className="w-[70%] ml-20 mb-5 border border-black rounded md:py-3 md:px-4 focus:outline-none focus:bg-white focus:border-red-600 md:ml-[7rem] md:mb-8 md:w-[64%]"
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
            className="w-5 h-5 -2 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600"
          />
          <span className="text-md md:text-xl font-light ml-4">
            I agree to the terms and conditions
          </span>
        </div>
        <br />
        <div className="flex justify-center w-[90%] m-auto">
          <button
            type="submit"
            className="px-5 py-3 mr-3 bg-red-900 text-white md:py-3 md:px-20 md:text-lg md:mr-5"
          >
            SUBMIT
          </button>
          <button className="px-5 py-3 ml-3 bg-red-900 text-white md:py-3 md:px-20 md:text-lg md:ml-5">
            <Link to={`/list`}>BACK</Link>
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
}

export default EditForm;
