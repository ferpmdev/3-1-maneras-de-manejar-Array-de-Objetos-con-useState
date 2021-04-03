import React from "react";
import { Fragment, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const handleInputChangeName = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChangeLastName = (event) => {
    setData({
      ...data,
      lastName: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.name + " " + data.lastName);
  };

  return (
    <Fragment>
      <h1>Form</h1>
      <form onSubmit={sendData}>
        <div className="col-md-3 mt-3">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="name"
            name="name"
            onChange={handleInputChangeName}
          />
        </div>
        <div className="col-md-3 mt-3">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="last name"
            value={data.lastName}
            onChange={handleInputChangeLastName}
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
