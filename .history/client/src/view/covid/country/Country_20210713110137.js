import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../../context/CovidContext';
export const Country = ({ value, countries }) => {

    const {
        covidState: { covids },
        getReportByCountry
    } = useContext(CovidContext)
    const [a, seta] = useState("")
    const onChangeCountry = (e
    ) => {
        seta(e.target.value)
    }
    useEffect(() => {
        if (a) {
            const { Slug } = covids.find((countries) => countries.ISO2 === a)
            getReportByCountry(Slug)
        }

    }, [a, countries])
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
                    <option>Chọn Quốc gia bạn muốn tìm kiếm</option>
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