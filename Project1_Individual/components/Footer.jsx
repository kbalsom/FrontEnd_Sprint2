// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import stylesheet and Link
import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";

//Create Footer Function
function Footer() {
  return (
    <div className="footer">
      <div id="footerlinks">
        {/* Set up links to corresponding pages */}
        <h1>
          <Link class="home" to="/">
            Home
          </Link>
        </h1>
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
  );
}

//Export Footer Function
export default Footer;
