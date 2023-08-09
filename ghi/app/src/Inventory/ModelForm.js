import React, {useEffect, useState} from 'react';
import './Inventory.css';


function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [name, setModelName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            setModelName('');
            setPictureUrl('');
            setManufacturer('');
        }
    }


    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4 form-1">
                <h1>Create a Vehicle Model</h1>
                <form onSubmit={handleSubmit} id="create-vehicle-form">
                <div className="form-floating mb-3">
                <input value={name} onChange={handleModelNameChange}placeholder="Model_name" required
                    type="text" name="name" id="name"
                    className="form-control" />
                    <label htmlFor="name">Model Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={pictureUrl} onChange={handlePictureUrlChange}placeholder="Picture_url"
                        required type="text" name="picture_url" id="picture_url"
                        className="form-control" />
                    <label htmlFor="picture_url">Picture</label>
                </div>
                <div className="mb-3">
                    <select value={manufacturer} onChange={handleManufacturerChange}required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                        {manufacturers?.map(manufacturer => {
                            return (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                {manufacturer.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button className="btn btn-success">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ModelForm;
