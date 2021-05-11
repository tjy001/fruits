import React, {useState} from 'react';

const UserContext = React.createContext({
    data: {
        role: "shopkeeper",
        accessGroups: {
            "apple": true, 
            "pear": true, 
            "NonCitrus-site": true, 
            "Citrus-site": true, 
            "orange": true, 
            "lemon": true, 
            "lime": true
        },
        tags: {
            "Citrus": false,
            "NonCitrus": false,
            "CustomView1": false
        }
    },
    setData: () => {}
});

export const UserContextProvider = (props) => {

    const [data, setData] = useState({
        role: "shopkeeper",
        accessGroups: {
            "apple": true, 
            "pear": true, 
            "NonCitrus-site": true, 
            "Citrus-site": true, 
            "orange": true, 
            "lemon": true, 
            "lime": true
        },
        tags: {
            "Citrus": false,
            "NonCitrus": false,
            "CustomView1": false
        }
    })

    return (
        <UserContext.Provider value={{data: data, setData: setData}}>{props.children}</UserContext.Provider>
    )
}

export default UserContext;