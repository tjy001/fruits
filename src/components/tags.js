import React, {useContext, useEffect, useState} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';
import {accessRef, roleTagRef} from '../data/user_data';

const Tags = () => {

    const user = useContext(UserContext);
    //const [tagList, setTagList] = useState([])

    useEffect(() => {
        //getTagList();
        user.setData(prevState => ({...prevState, tags: Object.fromEntries(roleTagRef[user.data.role].map(tag => [tag, false]))}))
    }, [user.data.role])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, tags: {...prevState.tags, [event.target.name]: event.target.checked}}))
    }

    /* const getTagList = () => {
        if (user.data.role) {
            let TagList = new Set();
            let accGrps = Object.keys(user.data.accessGroups).map(accGrp => accessRef[accGrp].tags)
            accGrps.map(tags => tags.forEach(item => TagList.add(item)))
            setTagList(Array.from(TagList))
        }
    } */

    const getTags = () => {
        if (user.data.role) {
            return roleTagRef[user.data.role].map(tag => 
                <FormControlLabel 
                    control={<Checkbox checked={user.data.tags[tag] ? user.data.tags[tag] : false } onChange={handleChange} name={tag}/>}
                    label={tag}
                    key={tag}
                />
            )
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
        </React.Fragment>
    )
}

export default Tags;