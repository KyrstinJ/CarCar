import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Sale.css';

function SalespersonList(){
    const [salesperson, setSalesperson] = useState([]);

    const loadsalesperson = async() => {
        const response = await fetch('http://localhost:8090/api/salespeople/');
        if(response.ok){
            const data = await response.json();
            setSalesperson(data.salespeople);
        }
    }

    useEffect(() => {
        loadsalesperson();
    }, []);


    return(
        <div>
            <h1>Salespeople</h1>
            <table className="table table-striped form-1">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {salesperson?.map(sale => {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.employee_id}</td>
                                <td>{sale.first_name}</td>
                                <td>{sale.last_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/salespeople/create" className="btn btn-success btn-lg px-4 gap-3">Add a Salesperson</Link>
            </div>
        </div>
    )
}

export default SalespersonList;
