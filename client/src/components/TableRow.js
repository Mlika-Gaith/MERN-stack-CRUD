import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
export default function TableRow(props) {
  function onDelete() {
    // eslint-disable-next-line eqeqeq
    if (window.confirm("are you sure you want to delete item ?") == true) {
      axios
        .get(
          process.env.REACT_APP_API + "/business/delete/" + props.obj._id ||
            "/business/delete/" + props.obj._id
        )
        .then(console.log("deleted"))
        .catch((err) => console.log(err));
    }
  }
  return (
    <tr>
      <td>{props.obj.person_name}</td>
      <td>{props.obj.business_name}</td>
      <td>{props.obj.business_gst_name}</td>
      <td>
        <Link to={"/edit/" + props.obj._id}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
