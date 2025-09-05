import React, { useState, useEffect } from 'react'
import Loader from '../Loader';
import { getUserDetails } from '../../api'; 
import { UserContext } from '../Context';   

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        setUserLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
            getUserDetails(token).then(setUser).catch(() => setUser(null)).finally(() => setUserLoading(false));
        } else {
            setUserLoading(false);
        }

    }, []);

    if (userLoading) {
        return <Loader />
    }

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider