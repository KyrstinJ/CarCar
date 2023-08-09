import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Sale.css';

function SaleList(){
    const [sales, setSales] = useState([]);

    const loadSales = async () => {
        const response = await fetch('http://localhost:8090/api/sales/');
        if(response.ok){
            const data = await response.json();
            setSales(data.sales);
        }
    }

    useEffect(() => {
        loadSales();
    }, []);

    return(
        <div>
            <h1>Sales</h1>
            <table className="table table-striped form-1">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map(sale => {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.salesperson.employee_id}</td>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile}</td>
                                <td>${sale.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/sale/create" className="btn btn-success btn-lg px-4 gap-3">Add a Sale</Link>
            </div>
        </div>
    )
}

export default SaleList;
