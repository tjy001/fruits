import React, {useEffect} from 'react';
import ReactEcharts from 'echarts-for-react';

const Chart = (values, tagVal) => {

    let dataLabels = []
    let dataValues = []

    useEffect(() => {
        if (values) {
            values.map(([key, value]) => {
                dataLabels.push(key)
                dataValues.push(value)
            })
        }
        if (tagVal) {
            tagVal.map(([key, value]) => {
                dataLabels.push(key)
                dataValues.push(value)
            })
        }
    }, [values, tagVal])

    const options = {
        xAxis: {
            type: 'category',
            data: dataLabels
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [{
            data: dataValues,
            type: 'bar',
            label: {
                    show: true,
                    position: 'top'
                },
        }]
    }

    return <ReactEcharts option={options}/>

}

export default Chart