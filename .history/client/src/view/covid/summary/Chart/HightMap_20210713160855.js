import { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import highchartMap from 'highcharts/modules/map'

highchartMap(Highcharts)

const initOptions = {
    chart: {
        height: '500',
    },
    title: {
        text: null,
    },
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        min: 0,
        stops: [
            [0.2, '#FFC4AA'],
            [0.4, '#FF8A66'],
            [0.6, '#FF392B'],
            [0.8, '#B71525'],
            [1, '	#7A0826'],
        ],
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
    },
    series: [
        {
            name: 'Dân số',
            joinBy: ['hc-key', 'key'],
        },
    ],
};

export const HightMap = ({ mapData }) => {
    // console.log(mapData);
    const [options, setOptions] = useState({})
    useEffect(() => {
        setOptions({
            ...initOptions,
        })
    }, [mapData])
    return (
        <div>
            vlxx
            {/* <Highcharts
                highcharts={Highcharts}
                options={{}}
                constructorType="mapChart"
            /> */}
        </div>
    )
}
