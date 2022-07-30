import React from "react";

function UsersList() {

    const users = [
        {
            id: 0,
            name: 'Adam Rose',
            salary: 20333
        },
        {
            id: 1,
            name: 'Phil Bundle',
            salary: 87656
        },
        {
            id: 2,
            name: 'Kelly Henricks',
            salary: 65212
        }
    ];

    return (

        <div className="center">
            <h1>Users List In Descending Order By Salary</h1>
            <table className="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.sort((a, b) => b.salary - a.salary).map((user, i) =>
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.salary}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;