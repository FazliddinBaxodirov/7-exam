import { createContext, useState } from "react";

export const Context = createContext()

export const SpotifyContext = ({children}) => {
    const [code,setCode] = useState(null)
    return (
        <Context.Provider value={{code,setCode}}>{children}</Context.Provider>
    )
}