import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UsersDatils() {
    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users" + params.id).then(res => res.json()).then(data => {
            setUser(data);
        })
    }, [])
    console.log(user);


    return <>

        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <p>{user.phone}</p>
        <a href="">{user.email}</a>
        <h2>{user.company}</h2>
        <h2>{user.city}</h2>
        <a href="">{user.website}</a>
    </>
}

export default UsersDatils