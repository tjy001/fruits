import React, {useContext, useState, useEffect} from 'react';
import UserContext from '../context/user_context';

const Data = () => {

    const user = useContext(UserContext);
    const [values, setValues] = useState([])

    const dataRef = {
        sub_1: 500,
        sub_2: 888,
        sub_3: 123
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
