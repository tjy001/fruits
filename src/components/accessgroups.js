import React, {useState, useContext, useEffect} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';
import {roleRef} from '../data/user_data';

const AccessGroups = () => {
    
    const [selAccessGroups, setSelAccessGroup] = useState([])

    const user = useContext(UserContext);
    useEffect(() => {
        user.setData(prevState => ({...prevState, accessGroups: Object.fromEntries(roleRef[user.data.role].map(i => [i, true]))}))
    }, [user.data.role])

    useEffect(() => {
        getSelectedAccessGroups()
    }, [user.data.accessGroups])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, accessGroups: {...prevState.accessGroups, [event.target.name]: event.target.checked}}))
    }

    const getAccessGroups = () => {
        if (user.data.role) {        
            return roleRef[user.data.role].map(accGrp => 
            <FormControlLabel 
                control={<Checkbox checked={user.data.accessGroups[accGrp] ? user.data.accessGroups[accGrp]: false} onChange={handleChange} name={accGrp}/>}
                label={accGrp}
                key={accGrp}
            />
            )
        }
    }

    const getSelectedAccessGroups = () => {
        if (user.data.accessGroups) {
            setSelAccessGroup(Object.keys(user.data.accessGroups).filter(accGrp=>user.data.accessGroups[accGrp]))
        }
    }

    return (
        <React.Fragment>
            <FormControl>
                <FormLabel>Access Groups</FormLabel>
                <FormGroup>
                    {getAccessGroups()}
                </FormGroup>
            </FormControl>
            <p>Selected Access Groups: {selAccessGroups}</p>
        </React.Fragment>
    )
}

export default AccessGroups