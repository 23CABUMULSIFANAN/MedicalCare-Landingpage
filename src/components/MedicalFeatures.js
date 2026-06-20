import "../styles/MedicalFeatures.css";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

function MedicalFeatures() {
  return (
    <section className="medical-section container">

      <div className="medical-grid">

       

        <div className="medical-map-wrapper">

          <MapContainer
            center={[11.0168, 76.9558]}
            zoom={13}
            scrollWheelZoom={false}
            className="medical-map"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[11.0168, 76.9558]}>
              <Popup>
                Medicare Hospital
              </Popup>
            </Marker>

          </MapContainer>

          

        </div>

        {/* Content Side */}

        <div className="medical-content">

          <span className="medical-badge">
            Medical Features
          </span>

          <h2>
            Additional Medical Features
          </h2>

          <p>
            Our platform provides smart healthcare
            management, online consultation and
            patient monitoring services.
          </p>

          <div className="feature-list">

            <div className="feature-item">
              ✓ Personalized Health Assessment
            </div>

            <div className="feature-item">
              ✓ Patient Education
            </div>

            <div className="feature-item">
              ✓ Appointment Reminders
            </div>

            <div className="feature-item">
              ✓ Real-Time Doctor Access
            </div>

            <div className="feature-item">
              ✓ Emergency Support
            </div>

            <div className="feature-item">
              ✓ Health Tracking
            </div>

          </div>

          <button className="medical-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default MedicalFeatures;