import React, { useState } from 'react'
import { AlertContext } from '../Context';

function AlertProvider({ children }) {
    const [alert, setAlert] = useState(null);
    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider