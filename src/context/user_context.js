import React, {useState} from 'react';

const UserContext = React.createContext({
    data: {
        role: "Boss",
        subscriptions: {
            sub_1: true, 
            sub_2: true,
            sub_3: true
        },
        tags: {
            tag_1: false,
            tag_2: false,
            tag_3: false
        }
    },
    setData: () => {}
});

export const UserContextProvider = (props) => {

    const [data, setData] = useState({
        role: "Boss",
        subscriptions: {
            sub_1: true, 
            sub_2: true,
            sub_3: true
        },
        tags: {
            tag_1: false,
            tag_2: false,
            tag_3: false
        }
    })

    return (
        <UserContext.Provider value={{data: data, setData: setData}}>{props.children}</UserContext.Provider>
    )
}

export default UserContext;