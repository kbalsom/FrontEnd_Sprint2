// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import stylesheets, functions, and images
import "../stylesheets/CareerPage.css";
import Footer from "./Footer";
import grad from "../images/grad.png";
import travel from "../images/travel.png";

//Create CareerPage Function
function CareerPage() {
  return (
    <div className="careerpage">
      <div id="headercontainer">
        <div id="headercontent">
          <h1>Career</h1>
          <p>What I have done and what I will do... </p>
        </div>
      </div>

      <div id="contentcontainer">
        <img id="image" src={grad} alt="Photo" />
        <h1> EDUCATION</h1>
        <p>
          Memorial University of Newfoundland (St. John’s, NL)
          <br /> Bachelor’s Degrees in French and Linguistics, September
          2015-April 2018
          <br />
          <br /> College of the North Atlantic (St. John’s, NL) <br />{" "}
          Hospitality Tourism Management Certificate, September 2014- June 2015{" "}
          <br />
          <br /> American School of Doha (Doha, Qatar)
          <br /> High School Diploma, June 2011
          <br /> 5 IB certificates (French HL, History HL, English HL, Math
          Studies SL, Spanish Ab Initio)
        </p>
        <h1>EMPLOYMENT HISTORY</h1>
        <p>
          Dicks and Company (St. John’s, NL)
          <br />
          Retail Manager May 2020- July 2021
          <br />
          <br />
          Dicks and Company (St. John’s, NL)
          <br />
          Sales Associate July 2019- May 2020
          <br />
          <br /> Walmart (St. John’s, NL)
          <br /> Sales Floor Associate October 2018- April 2018 <br />
          <br />
          Cleo (St. John’s, NL)
          <br /> Retail Associate June 2016-September 2016 <br />
          <br /> Fairfield Inn and Suites (St. John’s, NL)
          <br /> Room Attendant June 2015-September 2015
          <br />
          <br /> Fairfield Inn and Suites (St. John’s, NL)
          <br />
          Internship April 2015- June 2015
          <br />
          <br />
          Qatar Academy Early Learning Center (Doha, Qatar)
          <br />
          Teacher’s Assistant, January 2013- June 2013
        </p>
        <img id="image" src={travel} alt="Photo" />
        <h1>GOALS</h1>
        <p>
          Finish Software Development Program at Keyin College.
          <br />
          <br />
          Obtain meaningful employment as a Software Developer in St. John’s,
          NL.
          <br />
          <br />
          Volunteer with animal shelters.
          <br />
          <br />
          Join or start a program to engage more female youth in STEM.
          <br />
          <br />
          Continue learning, spending time with loved ones, traveling the world.
        </p>
      </div>
      {/* Call Footer. Since Footer does not appear on Home Page, it needs to be called on each page where it appears, rather than on App.js */}
      <Footer />
    </div>
  );
}

//Export CareerPage Function
export default CareerPage;
