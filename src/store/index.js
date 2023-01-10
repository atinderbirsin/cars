import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slices/carSlice";
import { addCar, removeCar, reset } from "./slices/carSlice";
import { updateForm } from "./slices/formSlice";
import formReducer from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});

export { addCar, removeCar, reset, updateForm };
export default store;
