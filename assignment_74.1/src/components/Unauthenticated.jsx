import React, {useContext} from 'react'
import { UserContext } from './Context'
import {Navigate} from 'react-router-dom'

function Unauthenticated({children}) {
  const { user } = useContext(UserContext);
  if(user){
    
    return <Navigate to='/' />;
  }
  return children;
}

export default Unauthenticated