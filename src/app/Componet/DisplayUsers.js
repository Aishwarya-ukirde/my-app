"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, updateUser } from "../redux/Slice";
import { useState } from "react";

export default function DisplayUsers() {
    const userData = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    const [editUserId, setEditUserId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");

    const handleUpdate = () => {
        if (editUserId) {
            const updatedUser = {
                id: editUserId,
                name,
                email,
                age,
                address
            };
            dispatch(updateUser(updatedUser));
            setEditUserId(null);
            setName("");
            setEmail("");
            setAge("");
            setAddress("");
        }
    };

    const handleEditClick = (user) => {
        setEditUserId(user.id);
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
        setAddress(user.address);
    };

    return (
        <div>
            <h3>User List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                            <td>
                                <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                                <button onClick={() => handleEditClick(item)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editUserId && (
                <div>
                    <h3>Update User</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update User</button>
                </div>
            )}
        </div>
    );
}
