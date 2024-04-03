import { createContext , useState } from "react";

const Context = createContext();

export function UserProvider({ children }){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [birthDay, setBirthDay] = useState('');

    return (
        <Context.Provider value={{username,password,birthDay, setUsername,setPassword,setBirthDay}}>
            {children}
        </Context.Provider>
    )
}

export default Context ;