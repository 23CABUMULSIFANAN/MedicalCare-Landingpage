import doc1 from "../assests/doc1.png";
import doc2 from "../assests/doc2.jpg"
import doc4 from "../assests/doc4.png"


import { FaStar } from "react-icons/fa";

import "../styles/Doctors.css";

function Doctors() {

  const doctors = [
    {
      id: 1,
      name: "Dr. Miles Carter",
      role: "Cardiologist",
      image: doc1,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Dr. Nguyen",
      role: "Neurologist",
      image: doc2,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Dr. Flores",
      role: "General Physician",
      image: doc4,
      rating: 4.9,
    },
  ];

  return (
    <section className="doctors-section container">

      <span className="doctor-badge">
        Our Doctors
      </span>

      <h2 className="doctor-title">
        Collaborate with our best
        <br></br> consultant by online
      </h2>

      <div className="doctor-grid">

        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
          >

            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-img"
            />

            <h4>{doctor.name}</h4>

            <p>{doctor.role}</p>

            <div className="doctor-rating">
              <FaStar />
              {doctor.rating}
            </div>

          </div>
        ))}

      </div>

      <button className="view-btn">
        View All Doctors
      </button>

    </section>
  );
}

export default Doctors;