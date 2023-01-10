import Input from "../components/Input";
import { addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const btnClasses =
    "px-3 py-1.5 bg-blue-500 rounded-md text-white hover:bg-blue-400 cursor-pointer transition duration-200 ease-linear";

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(addCar(state.form));
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className="flex gap-5 p-4">
        <Input type="text" fieldName="carName" label="Car Name" className="flex-[1]" />
        <Input type="number" fieldName="carPrice" label="Car Price" className="flex-[1]" />
        <div className="self-end">
          <input type="submit" className={btnClasses} />
        </div>
      </form>
    </div>
  );
}

export default Homepage;
