import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../context/user_context';
import {dataRef, accessRef, tagRef} from '../data/user_data';
import _ from 'lodash';
import ReactEcharts from 'echarts-for-react';

const Data = () => {

    const user = useContext(UserContext);
    const [values, setValues] = useState([])
    const [tagVal, setTagVal] = useState([])
    const [options, setOptions] = useState({})

    const sumArr = (arr) => {
        return arr.reduce((a, b) => a + b)
    }

    const getAccGrpVal = (accessGroup) => {
        let subs = accessRef[accessGroup].subscriptions
        return sumArr(subs.map(sub => dataRef[sub]))
    }

    const getTagSubs = () => {
        let tags = Object.keys(user.data.tags).filter(key => user.data.tags[key])
        let tagsubs = []
        if (tags.length > 0) {
            tagsubs = tags.map(tag => [tag, sumArr(_.intersection(tagRef[tag], Object.keys(user.data.accessGroups)).map(accGrp => getAccGrpVal(accGrp)))])
        }
        return tagsubs
    }

    const getSubs = () => {
        let gotAccGrps = Object.keys(user.data.accessGroups).filter(key => user.data.accessGroups[key])
        let gotSubs = gotAccGrps.map(accGrp => [accGrp, getAccGrpVal(accGrp)])
        return gotSubs
    }

    const getData = () => {
        if (user.data) {
            let tagSubs = getTagSubs()
            setTagVal(tagSubs.map(([tag, value]) => <p key={tag}>{tag}: {value}</p>))
            let accGrpSubs = getSubs()
            setValues(accGrpSubs.map(([accGrp, value]) => <p key={accGrp}>{accGrp}: {value}</p>))

            let dataLabels = []
            let dataValues = []

            accGrpSubs.map(([key, value]) => {
                dataLabels.push(key)
                dataValues.push(value)
            })

            tagSubs.map(([key, value]) => {
                dataLabels.push(key)
                dataValues.push({
                    value: value,
                    itemStyle: {
                        color: 'rgba(255, 0, 87, 1)'
                    }
                })
            })

            setOptions({
                xAxis: {
                    type: 'category',
                    data: dataLabels,
                    Width: 60
                },
                yAxis: {
                    type: 'value',
                    show: true,
                    name: 'Alerts'
                },
                series: [
                    {
                        data: dataValues,
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        barWidth: 50,
                        color: ['rgba(255, 140, 205, 1)']
                    }
                ]
            })
        }
    }

    useEffect(() => {
        getData()
        console.log(options)
    }, [user.data])

    return (
        <React.Fragment>
            <ReactEcharts option={options} />
        </React.Fragment>
    )
}

export default Data;
