import { useEffect, useContext, useState } from 'react'
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
export const Country = ({ value, countries }) => {
    // console.log(onChangeCountry);
    // console.log(value);
    const [a, seta] = useState("steak")
    // const onChangeCountry = (e) => {
    //     const selectedFood = e.target.value;
    //     seta(selectedFood);
    // }
    useEffect(() => {
        console.log(a)
    })
    return (
        <div>
            <div className="container p-5">
                <select
                    className="custom-select"
                    value={a}
                    onChange={(e) => {
                        const selectedFood = e.target.value;
                        seta(selectedFood);
                    }}
                >
                    <option value="steak">Steak</option>
                    <option value="sandwich">Sandwich</option>
                    <option value="dumpling">Dumpling</option>
                </select>
                {a}
            </div>
        </div>
    )
}