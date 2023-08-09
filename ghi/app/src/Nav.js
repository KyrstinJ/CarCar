import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Inventory</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers/create">Create a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/new">Create a Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new">New Automobile</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Service</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians/new">Add a Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments">Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/new">Create a Service Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/history">Service Appointment History</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Sale</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salespeople/create">Add a Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer">Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer/create">Add a Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sale">Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sale/create">Add a Sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sale/history">Salesperson History</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
