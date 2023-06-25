import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Favourite from "./components/favourite";
import Playlist from "./components/playlist";

function App() {
  return (
    <div className="container-fluid min-vh-100 app">
      <div className="row">
        <div className="col-2 bg-success">
          <Sidebar />
        </div>
        <div className="col-md position-relative">
          <div className="input-group w-50 search">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
          <div className="">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
