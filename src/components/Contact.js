import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h3 className="mb-4">Contact</h3>
      <div className="form-group row">
        <label
          htmlFor="formUsername"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Name
        </label>
        <div className="col-lg-5">
          <input type="text" className="form-control" id="formUsername" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="formEmail"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Email
        </label>
        <div className="col-lg-5">
          <input type="email" className="form-control" id="formEmail" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="formSubject"
          className="col-sm-1 offset-lg-3 col-form-label"
        >
          Subject
        </label>
        <div className="col-lg-5">
          <input type="text" className="form-control" id="formSubject" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-lg-6 offset-lg-3">
          <textarea className="form-control" rows="3" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-12 offset-lg-3">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
