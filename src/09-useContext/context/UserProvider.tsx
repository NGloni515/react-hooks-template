import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    id: 123,
    name: 'Angeloni Cuesta',
    email: 'angelonisrael@gmail.com',
}
 */

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState();

    return (
        
        <UserContext.Provider value={{user, setUser}}>
        {/* <UserContext.Provider value={{ hola: 'Mundo', user}}> */}
            { children }
        </UserContext.Provider>
    )
}