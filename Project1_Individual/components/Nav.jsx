// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import Stylesheet and Link 
import "../stylesheets/Nav.css";
import { Link } from "react-router-dom";

//Create Nav Function
function Nav() {
  return (
    <div className="nav">
      <div id="flexcontainer">
        <div id="homelogo">
          {/* Set up links to corresponding pages on the nav bar. */}
          <h1>
            <Link class="home" to="/">
              Kara Balsom
            </Link>
          </h1>
        </div>
        <div id="navlinks">
          <h1>
            <Link class="about" to="/about">
              About
            </Link>
          </h1>
          <h1>
            <Link class="work" to="/work">
              Work
            </Link>
          </h1>
          <h1>
            <Link class="career" to="/career">
              Career
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

//Export Nav Function
export default Nav;
