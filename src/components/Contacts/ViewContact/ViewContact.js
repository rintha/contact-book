import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas suscipit dolor quis urna sodales, vel dapibus massa
                auctor. Phasellus convallis nibh commodo lectus interdum, et
                lobortis purus condimentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU"
                alt=""
                className="contact-img"
              />
            </div>
            <div className="col-md-8 align-items-center">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold"> Muhammad Ali</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile : <span className="fw-bold"> 9207616185</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bold"> mhmd567@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bold"> mhmd567@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bold"> mhmd567@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group : <span className="fw-bold"> mhmd567@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="row"></div>
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewContact;
