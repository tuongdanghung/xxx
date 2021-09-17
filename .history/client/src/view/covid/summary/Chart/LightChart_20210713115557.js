
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import moment from 'moment';
const generateOptions = (data) => {
    console.log(data);
    // const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Tổng ca nhiễm',
        },
        xAxis: {
            // categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                align: 'right',
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Tổng Ca nhiễm',
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
};
export const LightChart = ({ data }) => {
    console.log(data.map((item) => item.Confirmed));
    const [option, setOption] = useState({})
    useEffect(() => {
        setOption(generateOptions(data))
    }, [data])
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                option={{ option }}
            />
        </div>
    )
}
// import React from 'react'
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// const options = {
//     title: {
//         text: 'My chart'
//     },
//     series: [{
//         data: [1, 2, 3]
//     }]
// }
// export const LightChart = ({ data }) => {
//     const [option, setOption] = useState({})
//     useEffect(() => {
//         setOption(generateOptions(data))
//     }, [data])
//     console.log(option);
//     return (
//         <div>
//             <HighchartsReact
//                 highcharts={Highcharts}
//                 options={options}
//             />
//         </div>
//     )
// }