import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Router/AppRoutes";
import Navbar from "./Components/App/Navbar";
import Sidebar from "./Components/App/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import FacultyContext from "../src/Context/FacultyContext";

function App() {
  return (
    <FacultyContext >
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div>
            <Navbar />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </FacultyContext>
  );
}

export default App;
