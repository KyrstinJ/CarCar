import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './Inventory.css';

function ModelsList(){
    const [models, setModels] = useState([]);

    const loadVehicleModels = async () => {
        const response = await fetch('http://localhost:8100/api/models/');
        if(response.ok){
            const data = await response.json();
            setModels(data.models);
        }
    }

    useEffect(() =>{
        loadVehicleModels();
    }, []);

    return(
        <div>
            <h1>Models</h1>
            <table className="table table-striped form-1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models?.map(model => {
                        return(
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img src={model.picture_url} style={{width: "100px", height: "60px"}} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/models/new" className="btn btn-success btn-lg px-4 gap-3">Add a Model</Link>
            </div>
        </div>
    )
}

export default ModelsList;
