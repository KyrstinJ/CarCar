import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function CustomerList(){
    const [customers, setCustomers] = useState([]);

    const loadCustomer = async () => {
        const response = await fetch('http://localhost:8090/api/customers/');
        if(response.ok){
            const data = await response.json();
            setCustomers(data.customer);
        }
    }

    useEffect(() => {
        loadCustomer();
    }, []);

    return(
        <div>
            <h1>Customer</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.map(customer => {
                        return(
                            <tr key={customer.id}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.phone_number}</td>
                                <td>{customer.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/customer/create" className="btn btn-secondary btn-lg px-4 gap-3">Add a Customer</Link>
            </div>
        </div>
    )
}

export default CustomerList;
