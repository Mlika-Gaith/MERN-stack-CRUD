import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
export default function Index() {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let response = await axios.get("/business");
        setBusiness(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [business]);

  return (
    <div className="container">
      <h3 align="center">Business List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Person</th>
            <th>Business</th>
            <th>GST Number</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {business.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
