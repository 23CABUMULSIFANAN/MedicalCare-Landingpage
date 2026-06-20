import Doctor from "../assests/Doctor.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero container py-4">

      <div className="row g-4">

        
        <div className="col-lg-7">
          <div className="hero-left">

            <span className="hero-badge">
              Healthcare Excellence
            </span>

            <h1 className="hero-title">
              Get Premium
              <br />
              Medical Care
              <br />
              For Your Best
              <br />
              Health
            </h1>

            <p className="hero-text">
              Excellence in healthcare with trusted doctors,
              advanced treatment, and compassionate care for
              every patient.
            </p>

            <button className="hero-btn">
              Make Appointment
            </button>

            <div className="customers mt-4">

              <div className="avatars">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/50?img=2"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/50?img=3"
                  alt=""
                />
              </div>

              <div>
                <h6 className="mb-0">25k+</h6>
                <small>Happy Patients</small>
              </div>

            </div>

          </div>
        </div>

        
         <div className="col-lg-5">

         <div className="hero-right">

  <div className="rating-card">
    ⭐ 4.9 Reviews
  </div>

  <img
    src={Doctor}
    alt="Doctor"
    className="doctor-image"
  />

  <div className="appointment-card">
    <h6>2.5K+</h6>
    <p>Appointments</p>
  </div>

  <div className="support-card">
    <h6>24/7</h6>
    <p>Support</p>
  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;