import "../styles/Features.css"
import phone from "../assests/phone.png"
import chat from "../assests/chat.png"
import heartrate from "../assests/heartrate.png"


function Features() {
  return (
    <section className="features-section container">

      <div className="features-header">

        <div>
          <span className="feature-badge">
            Features
          </span>

          <h2>
            Discover Our Benefits &
          
            Features
          </h2>
        </div>

        
      </div>

      <div className="feature-grid">

        

        <div className="feature-card large-card">

          <h4>Mobile Health Apps Tools</h4>

          <p>
            For patients to track symptoms,
            medications and appointments.
          </p>

          <img
            src={phone}
            alt="Mobile Health"
            className="feature-image"
          />

        </div>

       

        <div className="feature-card large-card">

          <h4>Secure Messaging Systems</h4>

          <p>
            HIPAA-compliant communication platform
            for doctors and patients.
          </p>

          <img
            src={chat}
            alt="Messaging"
            className="feature-image"
          />

        </div>

        
       <div className="feature-card combined-card">

  <div className="combined-content">

    <div className="combined-text">

      <h4>Personal Health Dashboard</h4>

      <p>
        Access medical history, reports,
        prescriptions and records easily.
      </p>

      <h4 className="mt-4">
        Appointment Booking System
      </h4>

      <p>
        Book appointments with doctors
        in just a few clicks and manage
        schedules efficiently.
      </p>

    </div>

    <div className="combined-img">

      <img
        src={heartrate}
        alt="Dashboard"
        className="combined-image"
      />

    </div>

  </div>

</div>
        

        <div className="feature-card small-card">

          <h5>Online Prescription Services</h5>

          <p>
            Manage and renew prescriptions
            digitally.
          </p>

        </div>

        

        <div className="feature-card small-card">

          <h5>Global Health Services</h5>

          <p>
            Access healthcare support
            worldwide.
          </p>

        </div>

        

        <div className="feature-card purple-card">
  <h4>Explore our more amazing services</h4>
  <p>
    Discover innovative healthcare solutions and treatments.
  </p>
</div>

      </div>

    </section>
  );
}

export default Features;