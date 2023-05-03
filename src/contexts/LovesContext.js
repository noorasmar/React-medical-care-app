import { createContext, useState } from 'react';

const LovesContext = createContext(0);

export default LovesContext;

export const LoveProvider = ({ children }) => {
    const [loves, setLoves] = useState(0);

    return (
        <LovesContext.Provider value={{ loves, setLoves }}>
            {children}
        </LovesContext.Provider>
    );
}