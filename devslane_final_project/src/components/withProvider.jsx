import React, { useContext } from 'react'
import { AlertContext, BgColorContext, CartContext, UserContext } from './Context';

function withProvider(Provider) {
    return function (InputComponent) {
        return function (props) {
            const contextData = useContext(Provider);
            return (
                <InputComponent {...props} {...contextData} />
            )
        }
    }
}

export default withProvider
export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);
export const withBgColor = withProvider(BgColorContext);