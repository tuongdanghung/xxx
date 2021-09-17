import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button, ButtonGroup } from '@material-ui/core';
import './index.scss'
const generateOptions = (data) => {
    const categories = []
    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Tổng Ca Nhiễm',
        },
        xAxis: {
            categories: categories,
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
                name: 'Tổng Ca Nhiễm',
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
}
export const LightChart = ({ data }) => {
    const [options, setOptions] = useState({});
    const [reportType, setReportType] = useState('all');
    useEffect(() => {
        let customData = [];
        switch (reportType) {
            case 'all':
                customData = data;
                break;
            case '30':
                customData = data.slice(Math.max(data.length - 30, 1));
                break;
            case '7':
                customData = data.slice(Math.max(data.length - 7, 1));
                break;

            default:
                customData = data;
                break;
        }

        setOptions(generateOptions(customData));
    }, [data, reportType]);
    return (
        <div>

            <ButtonGroup
                size='small'
                aria-label='small outlined button group'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    color={reportType === 'all' ? 'secondary' : ''}
                    onClick={() => setReportType('all')}
                >
                    Tất cả
                </Button>
                <Button
                    color={reportType === '30' ? 'secondary' : ''}
                    onClick={() => setReportType('30')}
                >
                    30 ngày
                </Button>
                <Button
                    color={reportType === '7' ? 'secondary' : ''}
                    onClick={() => setReportType('7')}
                >
                    7 ngày
                </Button>
            </ButtonGroup>

            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}
