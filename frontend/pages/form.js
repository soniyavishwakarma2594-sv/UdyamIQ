import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    businessSegment: "",
    description: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    locationUrl: "",
    pan: "",
    gst: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5000/api/form/submit", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Form submitted successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Unauthorized");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-title">Business Information Form</div>
        <div className="form-subtitle">
          Lorem Ipsum is simply dummy text of the printing
        </div>

        <div className="form-grid">
          <input
            name="fullName"
            placeholder="Full Name"
            className="form-input form-full"
            onChange={handleChange}
          />

          <input
            name="businessName"
            placeholder="Business Name"
            className="form-input"
            onChange={handleChange}
          />

          <select
            name="businessSegment"
            className="form-select"
            onChange={handleChange}
          >
            <option>Business Segment</option>
            <option>Retail</option>
            <option>IT Services</option>
            <option>Manufacturing</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            className="form-textarea form-full"
            onChange={handleChange}
          />

          <input
            name="address1"
            placeholder="Address 1"
            className="form-input"
            onChange={handleChange}
          />

          <input
            name="address2"
            placeholder="Address 2"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="form-row-3" style={{ marginTop: "20px" }}>
          <input
            name="city"
            placeholder="City"
            className="form-input"
            onChange={handleChange}
          />
          <select name="state" className="form-select" onChange={handleChange}>
            <option>State</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Kerala</option>
          </select>
          <input
            name="country"
            placeholder="Country"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="form-grid" style={{ marginTop: "20px" }}>
          <input
            name="pin"
            placeholder="Pin"
            className="form-input"
            onChange={handleChange}
          />

          <div className="map-link">
            <input
              name="locationUrl"
              placeholder="Location url"
              className="form-input"
              onChange={handleChange}
            />
            <span>Open Google Map</span>
          </div>

          <input
            name="pan"
            placeholder="Business PAN"
            className="form-input"
            onChange={handleChange}
          />

          <input
            name="gst"
            placeholder="Business GST"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="form-checkbox">
          <input type="checkbox" /> Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
