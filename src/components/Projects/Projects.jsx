import ProjectCardOne from "../../images/projects/project-card.png";
import ProjectCardTwo from "../../images/projects/project-card1.png";
import ProjectCardThree from "../../images/projects/project-card2.png";
import '../../index.css'
import '../Projects/Projects.css'

const Projects = () => {
  return (
    <section className="project__section">
      <div className="container">
        <div className="top">
          <h3 className="heading">View our projects</h3>
          <button className="view-button">View more &#8594;</button>
        </div>
        <div className="project-gallery">
          <img src={ProjectCardOne} alt="" className="image1"/>
          <div className="side-gallery">
            <img src={ProjectCardTwo} alt="" className="image2"/>
            <img src={ProjectCardThree} alt="" className="image2"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
