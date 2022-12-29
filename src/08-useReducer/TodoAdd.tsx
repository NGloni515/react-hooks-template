import { useForm } from "../hooks"

interface simpleForm {
    description: string
}

const emptySimpleForm: simpleForm = {
    description: '',
}

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm } = useForm(emptySimpleForm)

    const {description} = formState

    const onFormSubmit = (event) => {
        event.preventDefault();
        if( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo)
        onResetForm();
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}