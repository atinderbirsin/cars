import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars',
    initialState: [],
    reducers: {
        addCar(state, action) {
            state.push(action.payload);
        },
        removeCar(state, action) {
            const updatedCars = state.filter((car, index) => index !== action.payload);
            return updatedCars;
        },
        reset(state) {
            return [];
        }
    }
});

export const { addCar, removeCar, reset } = carSlice.actions

export default carSlice.reducer;