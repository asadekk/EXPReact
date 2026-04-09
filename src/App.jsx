import { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function Home() {
  return <>
  <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus, sed quae quaerat, dolorem laboriosam dicta voluptatibus facere quis sequi dolores libero voluptatem possimus accusantium voluptatum repellendus, praesentium officia explicabo.</h2>
  </>;
}

function About() {
  return <h1>About page</h1>;
}

function App() {
   const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
    <br />
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <br />
        <Link to="/about">About</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <table border="1px solid black">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;



 
 