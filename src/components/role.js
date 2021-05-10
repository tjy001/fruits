import React, {useContext} from 'react';
import {FormControl, Select, InputLabel, MenuItem} from '@material-ui/core';
import UserContext from '../context/user_context';
import {roleRef} from '../data/user_data';

const Role = () => {

    const user = useContext(UserContext)

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, role:event.target.value}))
    }

    return (
        <React.Fragment>
            <FormControl>
                <InputLabel id="test">Role</InputLabel>
                <Select defaultValue="shopkeeper"
                    value={user.data.role ? user.data.role : "shopkeeper"}
                    onChange={handleChange}>
                    {Object.keys(roleRef).map(role => 
                        <MenuItem value={role} key={role}>{role}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <p>Current Role: {user.data.role}</p>
        </React.Fragment>
    )
}

export default Role