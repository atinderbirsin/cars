import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm } from "../store";

function Input({ type, fieldName, label, ...rest }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const classes = "p-2 outline-none border border-gray-300 rounded";

  useEffect(() => {
    dispatch(updateForm({ [fieldName]: value }));
  }, [value, fieldName, dispatch]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        {...rest}
        className={`${classes} ${rest.className}`}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
