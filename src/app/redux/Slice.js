import { createSlice, nanoid ,current } from '@reduxjs/toolkit';
import { ACTION } from 'next/dist/client/components/app-router-headers';
import { Josefin_Sans } from 'next/font/google';

const initialState ={
    users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
}

const Slice = createSlice({
    name:"adduserslice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload.name,
                email:action.payload.email,
                age:action.payload.age,
                address:action.payload.address
            }
            state.users.push(data);
            let userData=JSON.stringify(current(state.users))
            localStorage.setItem("users",userData)
        },
        removeUser:(state,action)=>{
            const updateData=state.users.filter((item)=>{
                return item.id!==action.payload
            })
            state.users=updateData;
            const  userData=JSON.stringify(state.users)
            localStorage.setItem("users",userData)
        },
        updateUser: (state, action) => {
            const { id, name, email, age, address } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.name = name;
                user.email = email;
                user.age = age;
                user.address = address;
                localStorage.setItem("users", JSON.stringify(current(state.users)));
            }
        }
    }
})

export const { addUser ,removeUser,updateUser } = Slice.actions;
export default Slice.reducer;