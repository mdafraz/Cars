import { useDispatch , useSelector } from "react-redux";
import {changeName , changeCost ,addCar } from '../store/index'

function CarForm(){
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }
    const handleCostChange = (event) => {
        //event.target.value will give us a string so we will parse it into int 
        //and we will add 0 incase of NaN occur in parseInt
        const carCost = parseInt(event.target.value) || 0
        dispatch( changeCost(carCost) )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
         dispatch(addCar({ name , cost }))
         dispatch(changeCost(0))
         dispatch(changeName(''))
    };


    const { name , cost } = useSelector((state) => {
        return {
            name : state.form.name,
            cost : state.form.cost
        }
    })
    

    return<div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" value = {name} onChange={handleNameChange}/>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" type ='number' value = {cost || ''} onChange={handleCostChange}/>
                </div>
            </div>
            <div className="flied">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;