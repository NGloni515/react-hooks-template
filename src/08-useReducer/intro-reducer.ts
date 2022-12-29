
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    if(action.type === '[TODO] add todo'){
        console.log("type",action)
        console.log("state",state)
        return [...state, action.payload]
    }
    console.log("NOT type", action)
    return state;
}

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}]

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(newTodo, addTodoAction);

console.log({state: todos})
