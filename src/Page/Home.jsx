import React from 'react'
import { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) =>
            setUsers(data))
            setLoading(false)
    }, []);
    return <>
        {loading === true ? (
            <h1>Loading...</h1>
        ) : <table border="1px solid black">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>City</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                        <td>{user.website}</td>
                        <td><Link to={`/users/` + user.id}>More</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
        }</>
}

export default Home