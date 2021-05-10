import React, {useContext, useEffect, useState} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Checkbox} from '@material-ui/core';
import UserContext from '../context/user_context';
import {accessRef} from '../data/user_data';

const Tags = () => {

    const user = useContext(UserContext);
    const [tagList, setTagList] = useState([])
    console.log(accessRef["Citrus-site"])

    useEffect(() => {
        console.log(user)
        getTagList();
        user.setData(prevState => ({...prevState, tags: tagList}))
    }, [user.data.role])

    const handleChange = (event) => {
        user.setData(prevState => ({...prevState, tags: {...prevState.tags, [event.target.name]: event.target.checked}}))
    }

    const getTagList = () => {
        if (user.data.role) {
            let tagList = new Set();
            let accGrps = Object.keys(user.data.accessGroups).map(accGrp => accessRef[accGrp].tags)
            tagList.add(...accGrps)
            setTagList(tagList)
        }
    }

    const getTags = () => {
        if (user.data.role && tagList) {
            return tagList.map(tag => 
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
            <p>Selected Tags: {getSelTags()}</p>
        </React.Fragment>
    )
}

export default Tags;