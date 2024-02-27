import React from 'react';
import './App.css'; // Import the CSS file
import logo from './asserts/logo.png';
import award from './asserts/1.png';
import main from './asserts/2.png';
import tools from './asserts/3.png';


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
            Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint
            Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </main>
      {/* Other sections */}
      <section className="tools-section">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN
          9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
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
          <PhoneIcon className="text-white mr-2" />
          <span>Toll free 1800 200 1234</span>
        </div>
        <div className="flex items-center">
          <FacebookIcon className="text-white mr-2" />
          <span>www.facebook.com/cripumps</span>
        </div>
        <div className="flex items-center">
          <GlobeIcon className="text-white mr-2" />
          <span>www.crigroups.com</span>
        </div>
      </div>
      </footer>
    </div>
  );
}





function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}








// function FacebookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//     </svg>
//   );
// }

// function GlobeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="2" x2="22" y1="12" y2="12" />
//       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//     </svg>
//   );
// }

export default MyComponent;
