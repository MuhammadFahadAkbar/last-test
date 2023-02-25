import { useEffect, useState } from "react";
import FormDetails from "./FormDetails";

function List() {
  const [forms, setForms] = useState(null);

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forms/");
      const json = await response.json();
      if (response.ok) {
        setForms(json);
      }
    };

    fetchForms();
  }, []);

  if (!forms) {
    return (
      <div className="text-center text-3xl text-green-600 mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-5 max-w-[95%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto md:max-w-screen-xl ">
      {forms && forms.map((form) => <FormDetails key={form._id} form={form} />)}
    </div>
  );
}

export default List;
