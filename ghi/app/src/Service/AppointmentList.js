import React, {useEffect, useState} from 'react';


function AppointmentList() {

    const [appointments, setAppointments] = useState([]);

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


    const finishAppointment = async(id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/finish`;
        const response = await fetch(appointmentUrl, {method: 'PUT',});
        if (response.ok){
            setAppointments(oldValues => {
                return oldValues.filter(appointment => appointment.id !== id);
            })
        }
    }

    const cancelAppointment = async(id) => {
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/cancel`;
        const response = await fetch(appointmentUrl, {method: 'PUT',});
        if (response.ok){
            setAppointments(oldValues => {
                return oldValues.filter(appointment => appointment.id !== id);
            })
        }
    }


    return (
        <div>
            <h1>Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>VIN</th>
                    <th>Is VIP?</th>
                    <th>Customer</th>
                    <th>Date and Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                </tr>
                </thead>
                <tbody>
                {appointments?.filter(appointments => appointments.status === 'created').map(appointments => {
                    return (
                        <tr key={appointments.id}>
                        <td>{ appointments.vin }</td>
                        <td>{String(appointments.vin_vip)=== 'true' ? 'Yes' : 'No'}</td>
                        <td>{ appointments.customer }</td>
                        <td>{ new Date(appointments.date_time).toLocaleString() }</td>
                        <td>{ appointments.technician.first_name } { appointments.technician.last_name }</td>
                        <td>{ appointments.reason }</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => cancelAppointment(appointments.id)}>Cancel</button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick={() => finishAppointment(appointments.id)}>Finish</button>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a className="btn btn-secondary btn-lg px-4 gap-3" href='http://localhost:3000/appointments/new'>Create a New Appointment</a>
                <a className="btn btn-secondary btn-lg px-4 gap-3" href='http://localhost:3000/appointments/history'>View Service Appointment History</a>
            </div>
        </div>
    );
}

export default AppointmentList
