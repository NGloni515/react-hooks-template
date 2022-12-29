import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks"

export const TodoApp = () => {

    const { todos, todosCount, todosPending, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

    return(
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {todosPending}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                </div>

            </div>

            
        </>
    )
}