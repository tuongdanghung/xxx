import { useEffect, useContext, useState } from 'react'
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
export const Country = ({ value, countries }) => {
    // console.log(onChangeCountry);
    // console.log(value);
    const [a, seta] = useState([])
    const [foodState, setFoodState] = useState(["dumpling"]);
    // const onChangeCountry = (e
    // ) => {
    //     seta(e.target.defaultValue)
    // }
    useEffect(() => {
        console.log(foodState)
    })
    return (
        <div className="container p-5">
            <select
                className="custom-select"
                value={foodState}
                onChange={(e) => {
                    const selectedFood = e.target.value;
                    setFoodState(selectedFood);
                }}
            >
                <option value="steak">Steak</option>
                <option value="sandwich">Sandwich</option>
                <option value="dumpling">Dumpling</option>
            </select>
            {foodState}
        </div>
    )
}