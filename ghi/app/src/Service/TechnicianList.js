import React, {useEffect, useState} from 'react';

function TechnicianList() {

    const [technicians, setTechnicians] = useState([]);

    const fetchData = async() => {
        const url="http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Technicians</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {technicians?.map(technicians => {
                    return (
                        <tr key={technicians.id}>
                        <td>{ technicians.employee_id }</td>
                        <td>{ technicians.first_name }</td>
                        <td>{ technicians.last_name }</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a className="btn btn-secondary btn-lg px-4 gap-3" href='http://localhost:3000/technicians/new'>Create a New Technician</a>
            </div>
        </div>
    );
}

export default TechnicianList
