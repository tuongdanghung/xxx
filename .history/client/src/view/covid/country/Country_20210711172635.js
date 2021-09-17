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
                    {countries.map((country) => {
                        return (
                            <option key={country.id} value={country.ISO2.toLowerCase()}>
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
