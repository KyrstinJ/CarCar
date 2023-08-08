import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function ManufacturersList(){
    const [manufacturers, setManufacturers] = useState([]);

    const loadManufacturers = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        if(response.ok){
            const data = await response.json();
            setManufacturers(data.manufacturers)
        }
      }

    useEffect(() => {
        loadManufacturers();
    }, []);


    return(
        <div>
            <h1>Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers?.map(manufacturer => {
                        return(
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/manufacturers/create" className="btn btn-secondary btn-lg px-4 gap-3">Add a Manufacturer</Link>
            </div>
        </div>
    )
}

export default ManufacturersList;
