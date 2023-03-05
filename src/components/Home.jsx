import React from "react";
import "./Home.css";

import image from "./image/logo.png";
function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>This is my React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            incidunt eos maxime dolorem non? Sapiente fugit delectus obcaecati
            optio autem mollitia exercitationem corporis quidem, accusamus
            repellendus iste ad ut. Laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            commodi obcaecati quaerat alias? Ratione odit quae, dolor repellat
            odio molestias, ipsam magni eaque rem libero ad blanditiis velit
            veniam obcaecati?
          </p>
        </div>
        <div className="col-md-6">
          <h1>This is my JavaScript</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            molestias fugiat culpa voluptas. Numquam molestiae laudantium est
            nam officia voluptate, sit cumque odio autem eligendi expedita eaque
            rerum, quia sed neque, perspiciatis repudiandae aspernatur optio
            soluta quibusdam similique suscipit harum reprehenderit facere. Qui,
            in? Repellendus ut porro magnam animi facilis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            pariatur.
          </p>
          <img src={image} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
