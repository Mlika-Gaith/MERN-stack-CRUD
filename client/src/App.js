import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}

// Outlet enables component to render child routes

export default App;
