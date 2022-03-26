import React from "react";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <div className="container">
      {/* <nav style={{ margin: "100px 0 0 40px" }}>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li className="card" key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav> */}

      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Second navbar example"
      >
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
          
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample02"
            aria-controls="navbarsExample02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              {/*               
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li> */}

              {MenuItems.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
