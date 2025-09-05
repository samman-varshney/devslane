import React, {useState, useCallback} from 'react'
import { BgColorContext } from '../Context';

function bgColorProvider({ children }) {
    const [bgColor, setBgColor] = useState("bg-gray-100");
    const updateBgColor = useCallback((color) => {
        setBgColor(color);
    }, []);
    return (
        <BgColorContext.Provider value={{ bgColor, updateBgColor }}>
            {children}
        </BgColorContext.Provider>
    )
}

export default bgColorProvider