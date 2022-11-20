import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: Math.floor(Math.random() * 200),
                title: action.payload.title,
                completed: false
            };
            state.push(todo);
        },
    },
});


export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;