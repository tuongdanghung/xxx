import React from 'react'
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
export const Country = ({ value, onChangeCountry, countries, name }) => {
    console.log(onChangeCountry);
    console.log(name);
    return (
        <div>
            <FormControl >
                <InputLabel htmlFor="country-selector" shrink>Quốc Gia</InputLabel>

                <NativeSelect
                    value={name}
                    onChange={onChangeCountry}
                    inputProps={{
                        name: { name },
                        id: 'country-selector'
                    }}
                >
                    {countries.map((country) => {
                        return (

                            <option key={country.ISO2} value={country.ISO2} name={country.ISO2}>
                                {country.Country}
                            </option>
                        )
                    })}
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia bạn muốn xem</FormHelperText>
            </FormControl>
        </div>
    )
}