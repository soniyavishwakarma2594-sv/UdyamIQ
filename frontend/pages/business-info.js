import { useState } from "react";

export default function BusinessInfo() {
  const [username, setUsername] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Business Information Form</h1>
        <p className="subtitle">
          Lorem Ipsum is simply dummy text of the printing
        </p>

        <div className="field">
          <label>Your URL</label>
          <div className="url-box">
            <span className="prefix">udyamiq/id/</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="link-btn">Customize it</button>
          </div>
        </div>

        <div className="upload-box">
          <input type="file" id="logoUpload" hidden />

          <div className="upload-container">
            <span className="placeholder">No file selected</span>

            <label htmlFor="logoUpload" className="upload-btn">
              Upload
            </label>
          </div>
        </div>

        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}
