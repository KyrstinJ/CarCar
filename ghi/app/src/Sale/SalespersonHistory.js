import React, {useState, useEffect} from 'react';
import './Sale.css';

function SalespersonHistory(){
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [salesperson, setSalesperson] = useState('');

    const hangleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const fetchSalesData = async () => {
            const salesUrl = `http://localhost:8090/api/sales/`;
            const salesResponse = await fetch(salesUrl);
            if(salesResponse.ok){
                const salesData = await salesResponse.json();
                setSales(salesData.sales);
            }
    }


    const fetchData = async () => {
        const url = "http://localhost:8090/api/salespeople/";

        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    }

    useEffect(() => {
        fetchSalesData();
        fetchData();
    }, []);

    return(
        <div>
            <h1>Salesperson History</h1>
            <select onChange={hangleSalespersonChange} value={salesperson} required name="salesperson" id="salesperson" style={{width: "100%"}} className='form-1'>
                <option value="">Choose a salesperson</option>
                {salespeople.map(salesperson => {
                    return(
                        <option key={salesperson.id} value={salesperson.employee_id}>
                            {salesperson.first_name} {salesperson.last_name}
                        </option>
                    )
                })}
            </select>
            <table className="table table-striped form-1">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.filter(salespeople => salespeople.salesperson.employee_id === salesperson).map(sale => {
                        return(
                            <tr key={sale.id}>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile}</td>
                                <td>{sale.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SalespersonHistory;
