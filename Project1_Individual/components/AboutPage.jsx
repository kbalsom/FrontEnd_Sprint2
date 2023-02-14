// Project by: Kara Balsom
//Date Written: August 15, 2022
//File Name: Kara_Sprint2.zip

//Import stylesheets, functions, and images
import "../stylesheets/AboutPage.css";
import Footer from "./Footer";
import professional from "../images/professional.png";

//Create AboutPage Function
function AboutPage() {
  return (
    <div className="aboutpage">
      <div id="headercontainer">
        <div id="headercontent">
          <h1>About Me</h1>
          <p>
            I am currently a student at Keyin College, studying Software
            Development. I am due to graduate April, 2023, and am excited to
            join the rapidly developing tech industry here in Newfoundland.
          </p>
        </div>
      </div>
      <div id="aboutcontainer">
        <img id="image" src={professional} alt="Photo" />
        <p>
          After obtaining a bachelor’s degree from Memorial Univsersity with a
          double major in French and Linguistics, I found myself working in
          retail management at a local business. Although I enjoyed being able
          to interact with people all day, I felt I had yet to discover a career
          path that would leave me fulfilled. After much research, I became more
          and more interested in the technology sector. It seemed to me that the
          most exciting, innovative job opportunities in Newfoundland were to be
          found in the growing tech scene. I choose the Keyin College Software
          Development program because it offered excellent courses, a small
          class size that allows you to build relationships with instructors and
          fellow students, and a chance to network with local companies that are
          interested in hiring graduates. As someone with no background in
          Software Development, it was a risk to start at a new educational
          journey later in life, with little idea what would be involved. I am
          proud to say that not only have I been able to excel in my courses,
          but I have become very passionate about what I am doing. I am
          currently in my second semester, and have already completed many
          projects that I think speak to my potential abilities as a Software
          Developer. Please click the “Work” link above to view these projects,
          and feel free to contact at me at kara.balsom@keyin.com.{" "}
        </p>
      </div>
      {/* Call Footer. Since Footer does not appear on Home Page, it needs to be called on each page where it appears, rather than on App.js */}
      <Footer />
    </div>
  );
}

//Export AboutPage Function
export default AboutPage;
