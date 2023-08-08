import React, {useEffect, useState} from 'react';


function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState('');
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');
    const [vinVip, setVinVip] = useState('');
    const [autos, setAutos] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.date_time = date;
        data.technician = technician;
        data.reason = reason;
        data.vin_vip = vinVip;

        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

            const response = await fetch(appointmentUrl, fetchConfig);
            if (response.ok) {
                const newAppointment = await response.json();
                setVin('');
                setCustomer('');
                setDate('');
                setTechnician('');
                setReason('');
                setVinVip('');
            }
    }

    const fetchAutoVin = async () => {
        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        setAutos(data.autos);
        }
    }

    useEffect(() => {
        fetchAutoVin();
    }, []);

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
        if (vin === autos.vin) {
            setVinVip(true);
        } else {
            setVinVip(false);
        }
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
    }

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    }

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    }

    const handleVinVipChange = (event) => {
        const value = event.target.value;
        setVinVip(value);
    }

    const fetchData = async () => {
        const url = 'http://localhost:8080/api/technicians/';

        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a Service Appointment</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                <input value={vin} onChange={handleVinChange} placeholder="Vin" required
                    type="text" name="vin" id="vin"
                    className="form-control" />
                    <label htmlFor="vin">Automobile Vin</label>
                </div>
                <div className="form-floating mb-3">
                <input value={customer} onChange={handleCustomerChange} placeholder="Customer" required
                    type="text" name="customer" id="customer"
                    className="form-control" />
                    <label htmlFor="customer">Customer</label>
                </div>
                <div className="form-floating mb-3">
                <input value={date} onChange={handleDateChange} placeholder="Date"
                    required type="datetime-local" name="date" id="date"
                    className="form-control" />
                    <label htmlFor="date">Date</label>
                </div>
                <div className="mb-3">
                    <select value={technician} onChange={handleTechnicianChange} required name="technician" id="technician" className="form-select">
                    <option value="">Choose a technician...</option>
                        {technicians?.map(technician => {
                            return (
                                <option key={technician.id} value={technician.id}>
                                {technician.first_name} {technician.last_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input value={reason} onChange={handleReasonChange} placeholder="Reason"
                        required type="text" name="reason" id="reason"
                        className="form-control" />
                    <label htmlFor="reason">Reason</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={vinVip} onChange={handleVinVipChange} placeholder="Vin_vip"
                        required type="hidden" name="vin_vip" id="vin_vip"
                        className="form-control" />
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default AppointmentForm;
