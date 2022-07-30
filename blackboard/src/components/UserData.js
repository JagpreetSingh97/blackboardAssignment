import { useEffect, useState } from "react";

function UserData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1").then((result) => {
            result.json().then((response) => {
                setData(response);
            })
        })
    }, []);
    return (
        <div className="center">
            <h1>User Data From API</h1>
            <p><span className="strong">Name:</span> {data.name}</p>
            <p><span className="strong">Website:</span> {data.website}</p>
            <p><span className="strong">Email:</span> {data.email}</p>
            <p><span className="strong">Phone:</span> {data.phone}</p>
        </div>
    )
}

export default UserData;