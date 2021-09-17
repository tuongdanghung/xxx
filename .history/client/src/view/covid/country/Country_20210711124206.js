import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
export const Country = ({ value, onChangeCountry }) => {
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

                </NativeSelect>
            </FormControl>
        </div>
    )
}
