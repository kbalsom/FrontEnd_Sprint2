// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import Functions and Stylesheets
import "../stylesheets/WorkPage.css";
import ImageSlider from "./ImageSlider";
import { Slider } from "./Slider";
import Footer from "./Footer";

//Create WorkPage Function
function WorkPage() {
  return (
    <div className="workpage">
      <div id="headercontainer">
        <div id="headercontent">
          <h1>Work</h1>
          <p>
            A collection of some of my work as a Software Development student.
            This is just the beginning...
          </p>
        </div>
      </div>
      <div id="intro">
        <p>
          Here is a slideshow of examples of some of the projects I have created
          whilst a student at Keyin College.
        </p>
      </div>
      {/* Call ImageSlider Function, and set constant slides = data from Slider*/}
      <div id="slider">
        <ImageSlider slides={Slider} />
      </div>

      <div id="github">
        <p>
          Please visit my github for a closer look at the code behind these
          projects:
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kbalsom/MyPortfolio.git"
        >
          GitHub
        </a>
      </div>
      {/* Call Footer. Since Footer does not appear on Home Page, it needs to be called on each page where it appears, rather than on App.js */}
      <Footer />
    </div>
  );
}

//Export WorkPage Function
export default WorkPage;
