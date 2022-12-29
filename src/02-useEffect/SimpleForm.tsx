import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'ngloni515',
        email:'angelonisrael@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}: any) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        // console.log('formState changed!')

    }, [formState])

    useEffect(() => {
        // console.log('email changed!')

    }, [email])

    useEffect(() => {
        // console.log('unmount !')

        return () => {

        }
    }, [])

    return <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input 
            type={"text"}
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type={"email"}
            className="form-control mt-2"
            placeholder="angelonisrael@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        { username === 'ngloni515' && <Message />}
    </>
}