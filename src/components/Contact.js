import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h3>Contact</h3>
      <div className="form-group row">
        <label
          for="colFormLabel"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Name
        </label>
        <div className="col-lg-5">
          <input type="text" className="form-control" id="colFormLabel" />
        </div>
      </div>
      <div className="form-group row">
        <label
          for="colFormLabel"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Email
        </label>
        <div className="col-lg-5">
          <input type="email" className="form-control" id="colFormLabel" />
        </div>
      </div>
      <div className="form-group row">
        <label
          for="colFormLabel"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Subject
        </label>
        <div className="col-lg-5">
          <input type="text" className="form-control" id="colFormLabel" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-lg-6 offset-lg-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12 offset-lg-3">
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
