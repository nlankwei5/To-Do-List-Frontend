import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

    let todos = [
        'Go to the gym', 
        'Eat more fruits and vege', 
        'Drink more water'
    ]

    return (
    <ul className='main'>

        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard key={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}

    </ul>
    )
}
