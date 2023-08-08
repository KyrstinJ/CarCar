import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonList from './Sale/SalespersonList';
import SalespersonForm from './Sale/SalespersonForm';
import CustomerForm from './Sale/CustomerForm';
import CustomerList from './Sale/CustomerList';
import TechnicianForm from './Service/TechnicianForm';
import TechnicianList from './Service/TechnicianList';
import AppointmentForm from './Service/AppointmentForm';
import AppointmentList from './Service/AppointmentList';
import ServiceHistory from './Service/ServiceHistory';
import SaleForm from './Sale/SaleForm';
import SaleList from './Sale/SaleList';
import SalespersonHistory from './Sale/SalespersonHistory';
import ManufacturersList from './Inventory/ManufacturersList';
import ModelsList from './Inventory/ModelsList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ModelForm from './Inventory/ModelForm';
import AutomobileForm from './Inventory/AutomobileForm';
import AutomobileList from './Inventory/AutomobileList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="" element={<ManufacturersList manufacturers={props.manufacturers} />} />
            <Route path="create" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route path="" element={<ModelsList models={props.models} />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="salespeople">
            <Route path="" element={<SalespersonList salesperson={props.salesperson} />}/>
            <Route path="create" element={<SalespersonForm />}/>
          </Route>
          <Route path="customer">
            <Route path="" element={<CustomerList customers={props.customers} />} />
            <Route path="create" element={<CustomerForm />} />
          </Route>
          <Route path="sale">
            <Route path="" element={<SaleList sales={props.sales} />} />
            <Route path="create" element={<SaleForm />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>
          <Route path="technicians">
            <Route path="" element={<TechnicianList technicians={props.technicians} />}/>
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route path="" element={<AppointmentList appointments={props.appointments} />}/>
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="automobiles">
            <Route path="" element={<AutomobileList automobiles={props.automobiles} />}/>
            <Route path="new" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
