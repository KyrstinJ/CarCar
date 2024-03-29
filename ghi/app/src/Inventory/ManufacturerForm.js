import React, {useState} from 'react';
import './Inventory.css';

function ManufacturerForm(){
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const data = {};

        data.name = name;

        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(manufacturerUrl, fetchOptions)
        if(response.ok){
            const newManufacturer = await response.json();
            setName('');
        }
    }


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 form-1">
                    <h1>Create a manufacturer</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Manufacturer Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Manufacturer Name</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerForm;
