import React from 'react';
import './App.css'; // Import the CSS file
import logo from './asserts/logo.png';
import award from './asserts/1.png';
import main from './asserts/2.png';
import tools from './asserts/3.png';
import { FaPhone, FaFacebook, FaGlobe } from 'react-icons/fa';



function MyComponent() {
  return (
    <div className="my-component">
      <header className="header">
        <div className="title">
          <img
            alt="C.R.I. FLUID SYSTEMS Logo"
            className="logo"
            src={logo}
          />
        </div>
      </header>
      <main className="main">
        <div className="left-section">
          <img
            alt="Award"
            className="award-image"
            src={award}
          />
        </div>
        <div className="right-section">
          <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy
              products for various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services
              Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT
              enabled control panel.
            </li>
          </ul>
          <img
            alt="Award"
            className="award-image-right"
            src={main}
          />
          <p>
            Government of India has awarded the <span className='awards' style={{ fontSize: '1.2rem' }}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint
            Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </main>
      {/* Other sections */}
      <section className="tools-section">
        <h6>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
          9,000 MILLION UNITS OF POWER FOR THE NATION.
        </h6>
        <div className="grid">
          <img alt="Valve" src={tools} />
        </div>
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
        </p>
      </section>
      <section className="info-section">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER &
          PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING |
          HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </section>

      <footer className="footer">
  <div className="footer-main">
    <div className="flex items-center">
      <FaPhone className="icons" size={15} />
      <span>Toll free 1800 200 1234</span>
    </div>
    <div className="flex items-center">
      <FaFacebook className="icons" size={15} />
      <span>www.facebook.com/cripumps</span>
    </div>
    <div className="flex items-center">
      <FaGlobe className="icons" size={15} />
      <span>www.crigroups.com</span>
    </div>
  </div>
</footer>
    </div>
  );
}

export default MyComponent;
