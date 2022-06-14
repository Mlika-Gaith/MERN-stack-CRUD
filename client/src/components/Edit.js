import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./form.css";
export default function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  //console.log(id);
  const [personName, setpersonName] = useState("");
  const [businessName, setbusinessName] = useState("");
  const [gstNumber, setgstNumber] = useState("");
  // equivalent to componentDidMount in class components
  useEffect(() => {
    axios
      .get("http://localhost:4000/business/edit/" + params.id)
      .then((response) => {
        setbusinessName(response.data.business_name);
        setpersonName(response.data.person_name);
        setgstNumber(response.data.business_gst_name);
      });
  }, [params.id]);

  function onSubmit(event) {
    event.preventDefault();
    const obj = {
      person_name: personName,
      business_name: businessName,
      business_gst_name: gstNumber,
    };
    axios
      .post("http://localhost:4000/business/edit/update/" + params.id, obj)
      .then((response) => console.log(response.data));
    // redirect to /index
    navigate(-1);
  }
  return (
    <div className="container">
      <div className=" form-container">
        <h3>Update Business</h3>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Add Person Name :</label>
            <input
              type="text"
              className="form-control"
              value={personName}
              onChange={(e) => setpersonName(e.target.value)}
              placeholder="person name ..."
            />
          </div>
          <div className="form-group">
            <label>Add Business Name :</label>
            <input
              type="text"
              className="form-control"
              value={businessName}
              onChange={(e) => setbusinessName(e.target.value)}
              placeholder="business name ..."
            />
          </div>
          <div className="form-group">
            <label>Add GST Number :</label>
            <input
              type="text"
              className="form-control"
              value={gstNumber}
              onChange={(e) => setgstNumber(e.target.value)}
              placeholder="GST number ..."
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
