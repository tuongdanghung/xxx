import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
export const Country = ({ value, onChangeCountry, countries }) => {
    console.log(countries);
    return (
        <div>
            <FormControl >
                <InputLabel htmlFor="country-selector" shrink>Quốc Gia</InputLabel>
                <NativeSelect
                    value={value}
                    onChange={onChangeCountry}
                    inputProps={{
                        name: 'country',
                        id: 'country-selector'
                    }}
                >
                    {countries.map((country) => {
                        return (
                            <option value={country.ISO2.toLowerCase()}>
                                {country.Country}
                            </option>
                        )
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    )
}
