import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <button
        className="btn btn-dark ms-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Login
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Login</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <form action=".">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="DJ@vicio.com"
              />
              <label for="floatingInput" id="emailLabel">
                DJ@vicio.com
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label for="floatingInput" id="passLabel">
                Password
              </label>
            </div>
          </form>

          <button className="btn btn-primary" type="submit">
            Enter
          </button>
        </div>
      </div>

      
    </>
  );
};

export { Login };
