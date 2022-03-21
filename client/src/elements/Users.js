import React, { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import axios from "axios"

const Users=()=> {
    const [Data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8080/users")
            setData(res.data.users)
        }
        fetchData()
    }, [setData])


    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Логин</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {Data.map((e, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{e.login}</td>
                    <td>{e.email}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    );
};
export default Users;
