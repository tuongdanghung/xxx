import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
export const Country = ({ value, onChangeCountry, countries }) => {
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
                    {/* <option>
                        .....
                    </option> */}
                    {countries.map((country, ISO2) => {
                        return (

                            <option key={ISO2} value={ISO2}>
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