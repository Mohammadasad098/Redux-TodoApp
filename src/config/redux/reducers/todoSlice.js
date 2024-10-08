import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state , action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deleteTodo: (state , action) => {
            state.todo.splice(action.payload.index , 1)
        },
        editTodo: (state, action) => {
            state.todo[action.payload.index].title = action.payload.title;  // Update the todo's title
          }
    }
})


export const { addTodo , deleteTodo , editTodo} = todoSlice.actions
export default todoSlice.reducer