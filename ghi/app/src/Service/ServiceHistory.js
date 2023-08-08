import React, {useEffect, useState} from 'react';


function ServiceHistoryList() {

    const [searchVin, setSearchVin] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [showTable, setShowTable] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const filteredAppointments = appointments.filter((appointment) => appointment.vin === searchVin);
        setAppointments(filteredAppointments);
        setShowTable(true);
    }

    const handleSearchVinChange = (event) => {
        const value = event.target.value;
        setSearchVin(value);
    }


    const fetchData = async() => {
        const url="http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

return (
    <div>
        <h1>Service History</h1>
        <div>
        <form onSubmit={handleSubmit} id="search-vin-form">
        <div className="form-floating mb-3">
        <input value={searchVin} onChange={handleSearchVinChange} placeholder="Search_vin" required
            type="search" name="search_vin" id="search_vin"
            className="form-control" />
            <label htmlFor="search_vin">Search by VIN...</label>
        </div>
        <button type="submit" className="btn btn-success">Search</button>
        </form>
    </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>VIN</th>
            <th>Is VIP?</th>
            <th>Customer</th>
            <th>Date and Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
        </tr>
        </thead>
    {showTable && (
        <tbody>
        {appointments?.map(appointments => {
            return (
                <tr key={appointments.id}>
                <td>{ appointments.vin }</td>
                <td>{ String(appointments.vin_vip) === 'true' ? 'Yes' : 'No'}</td>
                <td>{ appointments.customer }</td>
                <td>{ new Date(appointments.date_time).toLocaleString() }</td>
                <td>{ appointments.technician.first_name } { appointments.technician.last_name }</td>
                <td>{ appointments.reason }</td>
                <td>{ appointments.status }</td>
            </tr>
            );
        })}
        </tbody>
        )}
    </table>
    </div>
);
}

export default ServiceHistoryList;
