import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

interface loginForm {
    username: string,
    email: string,
    password: string,
}

const emptyLoginForm: loginForm = {
    username: '',
    email: '',
    password: '',
}

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm} = useForm(emptyLoginForm)

    const { username, email, password} = formState

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
        <h1>Formulario con custom Hook</h1>
        <hr/>

        <input 
            type={"text"}
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        { username === 'ngloni515' && <Message />}

        <input 
            type={"email"}
            className="form-control mt-2"
            placeholder="angelonisrael@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type={"password"}
            className="form-control mt-2"
            placeholder="contrasena"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        
        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
}