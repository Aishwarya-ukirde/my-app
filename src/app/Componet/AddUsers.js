"use client";
import { useState } from "react";
import { addUser } from "../redux/Slice";
import { useDispatch } from "react-redux";

export default function AddUsers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();
    

    const userDispatch = () => {
        if (!name || !email || !age || !address) {
            alert("Please fill in all fields.");
            return;
        }

        const newUser = {
            name,
            email,
            age,
            address
        };
        dispatch(addUser(newUser));
        setName("");
        setEmail("");
        setAge("");
        setAddress("");
    };

    return (
        <div>
            <h3>Add User</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
            />
            <button onClick={userDispatch}>Add User</button>
        </div>
    );
}
