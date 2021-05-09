import React, {useContext, useEffect} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';

const Tags = () => {

    const tagsRef = {
        Boss: {
            tag_1: false,
            tag_2: false,
            tag_3: false
        },
        Slave: {
            tag_2: false,
        }
    }

    const user = useContext(UserContext);

    useEffect(() => {
        user.setData(prevState => ({...prevState, tags: tagsRef[user.data.role]}))
    }, [user.data.role])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, tags: {...prevState.tags, [event.target.name]: event.target.checked}}))
    }

    const getTags = () => {
        if (user.data.role) {
            let tagList = Object.keys(tagsRef[user.data.role]).map(tag => 
                <FormControlLabel 
                    control={<Checkbox checked={user.data.tags[tag] ? user.data.tags[tag] : false } onChange={handleChange} name={tag}/>}
                    label={tag}
                    key={tag}
                />
            )
            return tagList;
        }
    }

    const getSelTags = () => {
        if (user.data.tags) {
            let selTags = Object.keys(user.data.tags).filter(tag=>user.data.tags[tag])
            return selTags;
        }
    }

    return (
        <React.Fragment>
            <FormControl>
                <FormLabel>Tags</FormLabel>
                <FormGroup>
                    {getTags()}
                </FormGroup>
            </FormControl>
            <p>Selected Tags: {getSelTags()}</p>
            
        </React.Fragment>
    )
}

export default Tags;