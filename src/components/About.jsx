import React from "react";
import "./About.css";

import image from "./image/logo.png";
import image1 from "./image/mission.png";
function About() {
  return (
    <div>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-4">
            <h1>Cord</h1>
            <img src={image} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              ducimus vero unde? Libero, perferendis quas.
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="col-md-4">
            <h1>Cord</h1>
            <img src={image1} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              ducimus vero unde? Libero, perferendis quas.
            </p>
            <button className="btn">Read More</button>
          </div>
          <div className="col-md-4">
            <h1>Cord</h1>
            <img src={image} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              ducimus vero unde? Libero, perferendis quas.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
      <div className="form">
        <h1>Password Feild</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          perferendis ipsum dolorem enim temporibus asperiores iure!
        </p>
        <form action="action-page.php">
          <label for="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label for="pwd">Password:</label>
          <br />
          <input type="password" id="pwd" name="pwd" />
          <br />
          <br />
          <input type="submit" value="Submit" />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default About;
