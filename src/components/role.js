import React, {useContext} from 'react';
import {FormControl, Select, InputLabel, MenuItem} from '@material-ui/core';
import UserContext from '../context/user_context';

const Role = () => {

    const user = useContext(UserContext)

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, role:event.target.value}))
    }

    return (
        <React.Fragment>
            <FormControl>
                <InputLabel id="test">Role</InputLabel>
                <Select defaultValue="Boss"
                    value={user.data.role ? user.data.role : "Boss"}
                    onChange={handleChange}>
                    <MenuItem value="Boss">Boss</MenuItem>
                    <MenuItem value="Slave">Slave</MenuItem>
                </Select>
            </FormControl>
            <p>Current Role: {user.data.role}</p>
        </React.Fragment>
    )
}

export default Role