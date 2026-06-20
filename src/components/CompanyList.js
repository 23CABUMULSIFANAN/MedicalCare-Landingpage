import {
  FaHospital,
  FaClinicMedical,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";

import "../styles/CompanyList.css";

function CompanyList() {
  return (
    <section className="trusted-section container">

      <p className="trusted-label">
        Trusted By 100+ Global Healthcare Organizations
      </p>

      <div className="trusted-logos">

        <div className="logo-item">
          <FaHospital />
          <span>Apollo</span>
        </div>

        <div className="logo-item">
          <FaClinicMedical />
          <span>Fortis</span>
        </div>

        <div className="logo-item">
          <FaHeartbeat />
          <span>Medanta</span>
        </div>

        <div className="logo-item">
          <FaUserMd />
          <span>Mayo Clinic</span>
        </div>

        <div className="logo-item">
          <FaHospital />
          <span>Cleveland</span>
        </div>

      </div>

    </section>
  );
}

export default CompanyList;