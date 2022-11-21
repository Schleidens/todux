import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: Math.floor(Math.random() * 200),
                title: action.payload.title,
            };
            state.push(todo);
        },
        deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
    },
});


export const {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;