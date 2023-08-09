import React from 'react';
import Logo from './CarCar.png'; // Import the PNG image
import './MainPage.css'; // Import your custom CSS for MainPage
import Car1 from './CarCar (11).png'; // Import the PNG image
import Car2 from './CarCar (10).png'; // Import the PNG image
import Car3 from './CarCar (12).png'; // Import the PNG image

function MainPage() {
  return (
    <div className="main-page">
      <div className="logo-container">
        <img className="logo-image" src={Logo} alt="CarCar Logo" />
      </div>
      <div className="content">
        <p className="display-4 fw-bold luxury-text smaller-text">Experience the epitome of automobile sales excellence.</p>
      </div>

      <div className="yellow-line"></div>

      <div className="page-problem">
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card text-center h-100">
              <img
                src={Car3} alt="Car"
                className="card-img-top car-image"
              />
              <div className="card-body">
                <a href="/automobiles">
                <h5 className="card-title home-card-title">Inventory</h5>
                </a>
                <p className="card-text home-card-text smaller-text-2">
                  Experience the epitome of inventory management sophistication.
                  Elevate your dealership's selection with ease as you seamlessly update and introduce new models, manufacturers, and automobiles.
                  Unleash a world of luxury at your fingertips, where precision and elegance converge.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center h-100">
              <img
                src={Car1} alt="Car"
                className="card-img-top car-image"
              />
              <div className="card-body">
              <a href="/technicians">
                <h5 className="card-title home-card-title">Services</h5>
                </a>
                <p className="card-text home-card-text smaller-text-2">
                  Embark on seamless service management where expertise meets efficiency.
                  Effortlessly add and track technicians, maintain a comprehensive checklist, and create tailored service appointments.
                  Dive into a history of excellence, ensuring a journey of exceptional service at every step.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card text-center h-100">
              <img
                src={Car2} alt="Car"
                className="card-img-top car-image"
              />
              <div className="card-body">
              <a href="/sale">
                <h5 className="card-title home-card-title">
                  Sales
                </h5>
                </a>
                <p className="card-text home-card-text smaller-text-2">
                  Embark on a journey of sales excellence.
                  Empower your dealership with the ability to seamlessly add charismatic salespeople, manage a roster of valued customers, record sales transactions, and effortlessly explore a rich history of successful deals.
                  Elevate your sales experience, where every interaction is a step towards automotive success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-extension"></div>
      <div>
      <div
            className="col text-center direction-subtitle contact"
            style={{ color: "#F0EBCE" }}
          >
            Contact Us
          </div>
      <div className="col text-center" style={{ color: "#F0EBCE" }}>
            Telephone: 1(800) CAR-CAR1 <br></br>
            Email: <a href="mailto:info@carcar.com">info@carcar.com</a>
          </div>
      </div>
    </div>
  );
}

export default MainPage;
