import { createSlice ,nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name : 'cars',
    initialState:{
        searchTerm : '' , 
        data : []
    },
    reducers:{
        changeSearchTerm( state , action ){
            state.searchTerm = action.payload
        },
        addCar(state , action){

            // Assumption:
            // action.payload === { name : '' , cost: 213 }

            state.data.push({
                name : action.payload.name ,
                cost : action.payload.cost, 
                id : nanoid()

            })
        },
        removeCar(state , action){
            //Assumption 
            //action.payload === the id of the car that we want to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            })
            state.data = updated;
        }
    }
})

export const {addCar , removeCar , changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;