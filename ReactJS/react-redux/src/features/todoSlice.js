import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
            id: 1,
            text: "Todo 1"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'TODO',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;