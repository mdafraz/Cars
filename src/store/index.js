import { configureStore } from "@reduxjs/toolkit";
import { carsReducer , addCar , removeCar , changeSearchTerm } from "./slices/carsSlices";
import { formReducer , changeName , changeCost } from "./slices/formSlices";

const store = configureStore({
    reducer:{ 
        form : formReducer , 
        cars : carsReducer
    }
})

export {store , addCar , removeCar , changeSearchTerm , changeName , changeCost };
