import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import "./form.css";
export default function Create() {
  const [personName, setpersonName] = useState("");
  const [businessName, setbusinessName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: personName,
      business_name: businessName,
      business_gst_name: gstNumber,
    };
    axios
      .post(process.env.REACT_APP_API + "/business/add", obj)
      .then((res) => console.log(res.data));

    // clear fields
    Array.from(e.target).forEach(() => (e.value = ""));

    setpersonName("");
    setbusinessName("");
    setGstNumber("");
  }
  return (
    <div className="container">
      <div className=" form-container">
        <h3>Add new Business</h3>
        <form className="form">
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
              onChange={(e) => setGstNumber(e.target.value)}
              placeholder="GST number ..."
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
