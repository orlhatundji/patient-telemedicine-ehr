import React from "react";

// Assets
import { ReactComponent as Doctors } from "./assets/images/doctors.svg";
import { ReactComponent as Bullet } from "./assets/icons/bullet_tick-circle-outline.svg";

const Home: React.FC = () => (
  <div className="home">
    <h1 className="header2">Welcome to Hospital</h1>
    <Doctors />
    <h1>Welcome to your <br /> Telemedicine App</h1>
    <p>With our app, patients can now:</p>
    <ul className="patient_pecks_list">
      <li><Bullet className="bullet" /> Reach out to their doctors from anywhere</li>
      <li><Bullet className="bullet" /> Schedule Online appointments with their doctors</li>
      <li><Bullet className="bullet" /> Manage their time apporiately</li>
    </ul>
  </div>
);

export default Home;
