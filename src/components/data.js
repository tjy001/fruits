import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../context/user_context';
import {dataRef, accessRef, tagRef} from '../data/user_data';
import _ from 'lodash';

const Data = () => {

    const user = useContext(UserContext);
    const [values, setValues] = useState([])
    const [tagVal, setTagVal] = useState([])

    const sumArr = (arr) => {
        return arr.reduce((a, b) => a + b)
    }

    const getAccGrpVal = (accessGroup) => {
        let subs = accessRef[accessGroup].subscriptions
        return sumArr(subs.map(sub => dataRef[sub]))
    }

    const getTagSubs = () => {
        let tags = Object.keys(user.data.tags).filter(key => user.data.tags[key])
        return tags.map(tag => [tag, sumArr(_.intersection(tagRef[tag], Object.keys(user.data.accessGroups)).map(accGrp => getAccGrpVal(accGrp)))])
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
        }
    }

    useEffect(() => {
        getData()
    }, [user.data])

    return (
        <React.Fragment>
            <div>{values}</div>
            <div>{tagVal}</div>
        </React.Fragment>
    )
}

export default Data;
