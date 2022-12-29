import { useState } from "react";

interface loginForm {
    username: string,
    email: string,
    password: string,
}

interface signUpForm {
    username: string,
    email: string,
    password: string,
    profile: string,
}

interface simpleForm {
    description: string
}

export const useForm = ( initialForm: loginForm | signUpForm | simpleForm ) => {
    const [formState, setFormState] = useState<typeof initialForm>(initialForm)

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const onInputChange = ({target}: any) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return {
        formState,
        onInputChange,
        onResetForm
    }
}