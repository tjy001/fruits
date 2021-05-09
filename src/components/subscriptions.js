import React, {useState, useContext, useEffect} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';

const Subscriptions = () => {

    const [selSubs, setSelSubs] = useState([])

    const subsRef = {
        Boss: {
            sub_1: true, 
            sub_2: true,
            sub_3: true
        },
        Slave: {
            sub_2: true
        }
    }

    const user = useContext(UserContext);

    useEffect(() => {
        user.setData(prevState => ({...prevState, subscriptions: subsRef[user.data.role]}))
    }, [user.data.role])

    useEffect(() => {
        getSelectedSubs()
    }, [user.data.subscriptions])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, subscriptions: {...prevState.subscriptions, [event.target.name]: event.target.checked}}))
    }

    const getSubs = () => {
        if (user.data.role) {        
            let subList = Object.keys(subsRef[user.data.role]).map(sub => 
            <FormControlLabel 
                control={<Checkbox checked={user.data.subscriptions[sub] ? user.data.subscriptions[sub]: false} onChange={handleChange} name={sub}/>}
                label={sub}
                key={sub}
            />
            )
            return subList;
        }
    }

    const getSelectedSubs = () => {
        if (user.data.subscriptions) {
            setSelSubs(Object.keys(user.data.subscriptions).filter(sub=>user.data.subscriptions[sub]))
        }
    }

    return (
        <React.Fragment>
            <FormControl>
                <FormLabel>Subscriptions</FormLabel>
                <FormGroup>
                    {getSubs()}
                </FormGroup>
            </FormControl>
            <p>Selected Subscriptions: {selSubs}</p>
        </React.Fragment>
    )
}

export default Subscriptions