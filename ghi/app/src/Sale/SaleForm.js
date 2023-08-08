import React, {useState, useEffect} from 'react';

function SaleForm(){
    const [vins, setVins] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [automobile, setAutomobile] = useState('');
    const [salesperson, setSalesperson] = useState('');
    const [customer, setCustomer] = useState('');
    const [price, setPrice] = useState('');

    const handleVinChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleSalespersonChange = (event) => {
        const value = event.target.value;
        setSalesperson(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const data = {};

        data.automobile = automobile;
        data.salesperson = salesperson;
        data.customer = customer;
        data.price = price;

        const salesUrl = "http://localhost:8090/api/sales/";
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(salesUrl, fetchOptions)
        if(response.ok){
            const newSale = await response.json();

            const automobileUrl = `http://localhost:8100/api/automobiles/${automobile}/`;
            const automobileData = {sold: true};
            const automobileFetchOptions = {
                method: "PUT",
                body: JSON.stringify(automobileData),
                headers: {
                    "Content-Type": "application/json",
                }
            }

            const automobileResponse = await fetch(automobileUrl, automobileFetchOptions)
            if(automobileResponse.ok){
                setAutomobile('');
                setSalesperson('');
                setCustomer('');
                setPrice('');
            }
        }
    }

    const fetchData = async () => {
        const vinsUrl = "http://localhost:8100/api/automobiles/";

        const vinsResponse = await fetch(vinsUrl)
        if(vinsResponse.ok){
            const vinsData = await vinsResponse.json();
            setVins(vinsData.autos);
        }

        const salespeopleUrl = "http://localhost:8090/api/salespeople/";

        const salespeopleResponse = await fetch(salespeopleUrl)
        if(salespeopleResponse.ok){
            const salespeopleData = await salespeopleResponse.json();
            setSalespeople(salespeopleData.salespeople);
        }

        const customerUrl = "http://localhost:8090/api/customers/";

        const customerResponse = await fetch(customerUrl)
        if(customerResponse.ok){
            const customerData = await customerResponse.json();
            setCustomers(customerData.customer);
        }

    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Record a sale</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <select onChange={handleVinChange} value={automobile} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose an automobile VIN</option>
                                {vins?.map(vin => {
                                    if(vin.sold === false){
                                        return(
                                            <option key={vin.id} value={vin.vin}>
                                                {vin.vin}
                                            </option>
                                        )
                                    }
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleSalespersonChange} value={salesperson} required name="salesperson" id="salesperson" className="form-select">
                                <option value="">Choose a salesperson</option>
                                {salespeople?.map(salesperson => {
                                    return(
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.first_name} {salesperson.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} value={customer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a customer</option>
                                {customers?.map(customer => {
                                    return(
                                        <option key={customer.id} value={customer.id}>
                                            {customer.first_name} {customer.last_name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} value={price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaleForm;
