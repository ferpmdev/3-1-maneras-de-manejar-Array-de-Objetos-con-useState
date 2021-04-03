import React from "react";
import { Fragment, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });
  return (
    <Fragment>
      <h1>Form</h1>
      <form>
        <div className="col-md-3 mt-3">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="name"
          />
        </div>
        <div className="col-md-3 mt-3">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="last name"
          />
        </div>
        <div className="col-md-3 mt-3">
          <button className="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
