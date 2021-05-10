import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../context/user_context';

const Data = () => {

    const user = useContext(UserContext);
    const [values, setValues] = useState([])

    const dataRef = {
        "apple-s1": 32,
        "apple-s2": 540,
        "pear-s1": 13,
        "pear-s2": 2003,
        "NonCitrus-s1": 50,
        "NonCitrus-s2": 73,
        "Citrus-s1": 1020,
        "Citrus-s2": 433,
        "orange-s1": 31,
        "orange-s2": 421,
        "orange-s3": 543,
        "lemon-s1": 32,
        "lemon-s2": 1,
        "lime-s1": 314,
        "cnb-1": 35,
        "cnb-2": 16
    }

    const getData = () => {
        if (user.data.subscriptions) {
            let gotData = Object.keys(dataRef).filter(key => user.data.subscriptions[key])
            setValues(gotData.map(data => <p key={`${data}_value`}>{data}: {dataRef[data]}</p>))
        }
    }

    useEffect(() => {
        getData()
    }, [user.data])

    return (
        <React.Fragment>
            {values}
        </React.Fragment>
    )
}

export default Data;
