import "./Hero.css";
import img from "./Images/heroPicture.png";
import imgTwo from "./Images/logo.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text]   = useTypewriter({
    words: ['Laptop', 'Mobile Phone', 'Tablets'],
    loop: true,
    typeSpeed : 100,
    deleteSpeed : 100,
  });
  return (
    <div className="hero">
      <div className="hero-sec-navbar">
        <div className="empty"></div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Wholesale
                  </a>
                </li>
                <img src={imgTwo} className="logo-img" />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    How it Works
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-sec">
        <div className="hero-sec-circle"></div>

        <div className="hero-left">
          <h1>
            Largest <span>wholesaler</span> <br />
            of <span>{text}</span> <span><Cursor/></span>
          </h1>
          <div className="hero-sec-circle-two"></div>
          <p>
            supply that meet the Demands Get the best Wholesale of use and
            reusable Mobile Stocks.
          </p>
          <a href="#" className="hero-btn">
            Learn More&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>{" "}
          </a>{" "}
          <br />
          <div className="all-btns">
            <button id="email">
              <i className="fa-regular fa-envelope"></i> Email
            </button>
            <button id="sub">
              {" "}
              Subscribe &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </button>
            <button id="stock">
              {" "}
              &nbsp;&nbsp;<i className="fa-solid fa-arrow-down"></i>Stock list{" "}
            </button>
          </div>
          <div className="socail-media-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>

            <a href="#">
              <i className="fa-solid fa-users user"></i>
            </a>
            <h3>400k people registerd</h3>
          </div>
        </div>
        <div className="hero-right">
          <div className="circleOne"></div>
          <div className="circleTwo"></div>
          <img src={img} alt="" />
        </div>
      </div>

      <hr className="one" />
      <hr className="two" />
    </div>
  );
};

export default Hero;
