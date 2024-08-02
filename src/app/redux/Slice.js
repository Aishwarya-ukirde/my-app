import { createSlice, nanoid, current } from '@reduxjs/toolkit';

const initialState = {
    users: []  
};

const Slice = createSlice({
    name: "adduserslice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                age: action.payload.age,
                address: action.payload.address
            };
            state.users.push(data);
            if (typeof window !== 'undefined') {
                let userData = JSON.stringify(current(state.users));
                localStorage.setItem("users", userData);
            }
        },
        removeUser: (state, action) => {
            const updateData = state.users.filter((item) => {
                return item.id !== action.payload;
            });
            state.users = updateData;
            if (typeof window !== 'undefined') {
                const userData = JSON.stringify(state.users);
                localStorage.setItem("users", userData);
            }
        },
        updateUser: (state, action) => {
            const { id, name, email, age, address } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.name = name;
                user.email = email;
                user.age = age;
                user.address = address;
                if (typeof window !== 'undefined') {
                    localStorage.setItem("users", JSON.stringify(current(state.users)));
                }
            }
        },
        loadUsers: (state) => {
            if (typeof window !== 'undefined') {
                const users = JSON.parse(localStorage.getItem("users")) || [];
                state.users = users;
            }
        }
    }
});

export const { addUser, removeUser, updateUser, loadUsers } = Slice.actions;
export default Slice.reducer;
