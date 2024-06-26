"use client"
import React , {createContext} from "react"

const context = {
    api: "https://accountfa-backend.liara.run/api",
    isLogin : false,
    userInfo:[]
}

export const Context = createContext(context)

export const  ContextProvider = ({children}) => {
    return <Context.Provider value={context}>
        {children}
    </Context.Provider>
}  
