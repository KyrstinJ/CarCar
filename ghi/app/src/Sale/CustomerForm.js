import React, {useState} from 'react';
import './Sale.css';

function CustomerForm(){
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] =useState('');

    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const data = {};

        data.first_name = first_name;
        data.last_name = last_name;
        data.address = address;
        data.phone_number = phone_number;

        const customerUrl = "http://localhost:8090/api/customers/";
        const fetchOptions = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(customerUrl, fetchOptions)
        if(response.ok){
            const newCustomer = await response.json();

            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');
        }
    }

    return(
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4 form-1">
                    <h1>Add a Customer</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={first_name} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={last_name} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumberChange} value={phone_number} placeholder="(xxx)xxx-xxxx" required type="text" name="phone_number" id="phone_number" className="form-control" />
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerForm;
