import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useEffect, useContext, useState } from 'react'
import { CovidContext } from '../../../context/CovidContext';
export const Country = ({ value, countries }) => {

    const {
        covidState: { covids },
        getCountries,
        getReportByCountry
    } = useContext(CovidContext)
    // console.log(onChangeCountry);
    // console.log(value);
    const [a, seta] = useState("VN")
    const onChangeCountry = (e
    ) => {
        seta(e.target.value)
    }
    useEffect(() => {
        // const { Slug } = covids.find((countries) => countries.ISO2 === a)
        getReportByCountry(a)
        console.log({ Slug });
    }, [a, countries])
    return (
        <div>
            <FormControl >
                <InputLabel htmlFor="country-selector" shrink>Quốc Gia</InputLabel>

                <NativeSelect
                    value={a}
                    onChange={onChangeCountry}
                    inputProps={{
                        name: 'country',
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