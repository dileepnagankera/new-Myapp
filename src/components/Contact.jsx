import React from "react";
import "./Ccontact.css";

import image from "./image/photo1.jpg";
import image1 from "./image/photo2.png";
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={image} alt="logo" />
          </div>
          <div className="col-md-6">
            <h1>Simple websites</h1>
            <p>
              Make your business shine online with a custom simple website
              designed just for you by a professional designer. Need ideas?
              We’ve collected some amazing examples of simple websites from our
              global community of designers. Get inspired and start planning the
              perfect simple web design today.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={image1} alt="logo" />
          </div>
          <div className="col-md-6">
            <h1> websites</h1>
            <p>
              Make your business shine online with a custom simple website
              designed just for you by a professional designer. Need ideas?
              We’ve collected some amazing examples of simple websites from our
              global community of designers. Get inspired and start planning the
              perfect simple web design today.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              quis quo culpa perspiciatis repudiandae? Esse veniam, officia
              quidem temporibus quos possimus minima, odit dolores facere sit,
              corporis adipisci eaque et asperiores tempora. Voluptatum
              assumenda alias non voluptatibus similique, numquam delectus? Odit
              beatae quibusdam corporis facilis non itaque impedit suscipit
              neque nostrum porro quo reiciendis mollitia ratione quaerat,
              inventore eum incidunt fugit libero harum accusamus. Quisquam,
              minus ad harum quia distinctio ratione. Voluptate magni assumenda
              et. Sed voluptas amet consectetur modi, quos fuga, distinctio aut
              doloribus quae dicta beatae soluta? Odit ullam iusto deserunt ipsa
              consequatur corporis eius natus accusantium voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              itaque ratione aliquam blanditiis odio. Cumque error natus commodi
              magnam recusandae accusamus placeat provident at repellendus
              voluptates perspiciatis, quam aliquid dicta aperiam hic itaque
              delectus doloremque optio veritatis praesentium earum. Quasi
              itaque in nemo, quibusdam modi aliquam ab rerum earum deleniti!
            </p>
          </div>
        </div>
      </div>
      <form className="form1">
        <h1>Form</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <br />
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <br />

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <br />

          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>

          <br />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
