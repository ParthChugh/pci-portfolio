import { createContext, useState } from "react";

export const CommonContext = createContext({
    serviceItem: 0,
    updateServiceItem: (val) => { }
})

export const CommonContextProvider = (props) => {
    const [serviceItem, setServiceItem] = useState(0)

    const updateServiceItem = (val) => setServiceItem(val)

    const contextValue = {
        serviceItem,
        updateServiceItem
    }
    
    return (
        <CommonContext.Provider value={contextValue}>
            {props.children}
        </CommonContext.Provider>
    )
}
