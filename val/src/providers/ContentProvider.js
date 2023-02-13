import {createContext, useEffect, useState} from "react";

export const contentContext = createContext(null)

export const ContentProvider = ({children}) => {
    const [content, setContent] = useState({
        backlog: [],
        ready: [],
        inProgress: [],
        finished: [],
    })

    useEffect(()=>{
        const storageContent = JSON.parse(localStorage.getItem('content'));
        if(storageContent?.backlog) {
            setContent(storageContent)
        }
    },[])

    const setState = (values) => {
        setContent(values)
        localStorage.setItem('content',JSON.stringify(values))
    }


    const value = {content, setState}

    return <contentContext.Provider value={value}>
        {children}
    </contentContext.Provider>
}