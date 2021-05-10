import React, {useState, useContext, useEffect} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';

const AccessGroups = () => {

    const [selAccessGroups, setSelAccessGroup] = useState([])

    const accessRef = {
        apple: {
            subscriptions: ["apple-s1", "apple-s2"],
            tags: ["NonCitrus"]
        },
        pear: {
            subscriptions: ["pear-s1", "pear-s2"],
            tags: ["NonCitrus", "CustomView1"]
        },
        "NonCitrus-site": {
            subscriptions: ["NonCitrus-s1", "NonCitrus-s2"],
            tags: ["NonCitrus"]
        },
        "Citrus-site": {
            subscriptions: ["Citrus-s1", "Citrus-s2"],
            tags: ["Citrus"]
        },
        orange: {
            subscriptions: ["orange-s1", "orange-s2", "orange-s3"],
            tags: ["Citrus", "CustomView1"]
        },
        lemon: {
            subscriptions: ["lemon-s1", "lemon-s2"],
            tags: ["Citrus", "CustomView1"]
        },
        lime: {
            subscriptions: ["lime-s1"],
            tags: ["Citrus"]
        }
    }

    const user = useContext(UserContext);

    useEffect(() => {
        user.setData(prevState => ({...prevState, subscriptions: accessRef[user.data.role]}))
    }, [user.data.role])

    useEffect(() => {
        getSelectedAccessGroups()
    }, [user.data.subscriptions])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, subscriptions: {...prevState.subscriptions, [event.target.name]: event.target.checked}}))
    }

    const getAccessGroups = () => {
        if (user.data.role) {        
            let subList = Object.keys(accessRef[user.data.role]).map(sub => 
            <FormControlLabel 
                control={<Checkbox checked={user.data.subscriptions[sub] ? user.data.subscriptions[sub]: false} onChange={handleChange} name={sub}/>}
                label={sub}
                key={sub}
            />
            )
            return subList;
        }
    }

    const getSelectedAccessGroups = () => {
        if (user.data.subscriptions) {
            setSelAccessGroup(Object.keys(user.data.subscriptions).filter(sub=>user.data.subscriptions[sub]))
        }
    }

    return (
        <React.Fragment>
            <FormControl>
                <FormLabel>Subscriptions</FormLabel>
                <FormGroup>
                    {getAccessGroups()}
                </FormGroup>
            </FormControl>
            <p>Selected Subscriptions: {selAccessGroups}</p>
        </React.Fragment>
    )
}

export default AccessGroups