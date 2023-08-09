import React, {useEffect, useState} from 'react';
import './Inventory.css';

function AutomobileList() {

    const [automobiles, setAutomobiles] = useState([]);

    const fetchData = async() => {
        const url="http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h1>Automobiles</h1>
            <table className="table table-striped form-1">
                <thead>
                <tr className='table-selector'>
                    <th>VIN</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Manufacturer</th>
                    <th>Sold</th>
                </tr>
                </thead>
                <tbody>
                {automobiles?.map(autos => {
                    return (
                        <tr key={autos.id}>
                        <td>{ autos.vin }</td>
                        <td>{ autos.color }</td>
                        <td>{ autos.year }</td>
                        <td>{ autos.model.name }</td>
                        <td>{ autos.model.manufacturer.name }</td>
                        <td>{ String(autos.sold) === 'true' ? 'Yes' : 'No'}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a className="btn btn-success btn-lg px-4 gap-3" href='http://localhost:3000/automobiles/new'>Create a New Automobile</a>
            </div>
        </div>
    );
}

export default AutomobileList
