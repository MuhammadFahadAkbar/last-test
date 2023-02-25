import { Link } from "react-router-dom";

const FormDetails = ({ form }) => {
  return (
    <div className="p-4 shadow-custom border-[1px]">
      <h4 className="mb-3">
        <span className=" font-semibold">Name: </span>
        {form.name}
      </h4>
      <p className="mb-3">
        <span className="font-semibold">Sector: </span>
        {form.sectors.map(
          (sector, index) =>
            sector +
            (form.sectors.length > 1 && index !== form.sectors.length - 1
              ? " ,"
              : "")
        )}
      </p>
      <p>{form.agree}</p>
      <Link
        className="py-1 px-4 font- bg-black text-white rounded-sm text-sm"
        to={`/forms/${form._id}`}
      >
        Edit
      </Link>
    </div>
  );
};

export default FormDetails;
