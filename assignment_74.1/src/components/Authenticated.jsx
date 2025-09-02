import React, {useContext, useEffect} from 'react'
import { UserContext } from './Context';
import { Navigate, useLocation } from 'react-router-dom';


function Authenticated({children}) {
    const location = useLocation();
    const { user } = useContext(UserContext);

    if(!user){
        console.log(location.pathname)
        return <Navigate to='/signIn' state={{from: location}}/>;
    }
    return children;
}

export default Authenticated