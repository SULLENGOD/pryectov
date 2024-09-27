import React from "react";
import './Search.css'

const Search = () => {
  return (
    <>
      <button
        className="btn btn-dark"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Search
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-body">
          <div className="input-group mb-3">
            <form action="." className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Artist"
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                <button type="button" className="btn btn-outline-secondary me-1">
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  id="closeBtn"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
