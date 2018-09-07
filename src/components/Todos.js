import React from 'react';

const Todos = ({todoList, deleteTodos, doneTodos}) => {
    const list = todoList.length ? (
        todoList.map(todo => {
            const classDone = `${todo.done} content-todos`;
            return (
                <div className="block-todos" key={todo.id}>
                    <p className={classDone}>{todo.content}</p>
                    <div className="wrapper-button">
                        <button className="delete" onClick={ () => {deleteTodos(todo.id)} }>Delete</button>
                        <button className="delete" onClick={ () => {doneTodos(todo)} }>Done</button>
                    </div>
                </div>
            )
        })
    ) : (
        <div>
            <p className="no-todos">You don't have Todo's ;(</p>
        </div>
    )

    return(
        <div>
            {list}
        </div>
    )
}

export default Todos;