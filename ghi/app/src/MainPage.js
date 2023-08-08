import React from 'react';
import './MainPage.css';
import CarCarLogo from './CarCar.png';

function MainPage() {
  return (
    <div className="container">
      <header className="header">
        <img src={CarCarLogo} alt="CarCar Logo" className="logo" />
        <h1 className="display-5 fw-bold">The premiere solution for automobile dealership management!</h1>
      </header>
      <div className="col-lg-6 mx-auto">
        <p className="sub-heading lead mb-4">
          The premiere solution for automobile dealership management!
        </p>
      </div>
      <p className="intro-text">
        Welcome to CarCar, your all-in-one solution for managing inventory, sales, and services at your car dealership.
      </p>
      {/* Add more components and content here */}
    </div>
  );
}

export default MainPage;
