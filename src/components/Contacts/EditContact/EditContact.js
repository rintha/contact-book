import React from "react";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <React.Fragment>
      <section className="edit-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas suscipit dolor quis urna sodales, vel dapibus massa
                auctor. Phasellus convallis nibh commodo lectus interdum, et
                lobortis purus condimentum.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Select a Group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    placeholder="Update"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Close
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU"
                className="contact-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditContact;
