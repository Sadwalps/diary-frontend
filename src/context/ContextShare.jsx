import { createContext, useState } from "react";

export const addDiaryContext = createContext({})

function ContextShare({ children }) {
    const [addDiaryData, setAddDiaryData] = useState([])
    return (
        <addDiaryContext.Provider value={{ addDiaryData, setAddDiaryData }}>
            {children}
        </addDiaryContext.Provider>
    )
}
export default ContextShare