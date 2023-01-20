import "../WorkSection/WorkSection.css";
import WorkData from "./WorkData";
import StrategyIcon from "../../images/icons/pointer1.png";
import WireframingIcon from "../../images/icons/pointer2.png";
import DesignIcon from "../../images/icons/pointer3.png";
import DevelopmentIcon from "../../images/icons/pointer4.png";
import "../../index.css";
import "../WorkSection/WorkSection.css";

const WorkSection = () => {
  return (
    <section className="work__section">
      <div className="work__section-content container">
        <div className="work__section-left">
          <h2 className="work-title">How we work</h2>
          <p className="work-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <button className="touch-button">Get in touch with us &#8594;</button>
        </div>
        <div className="work__section-right">
          <WorkData
            imgSrc={StrategyIcon}
            title="Strategy"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
          />
          <WorkData
            imgSrc={WireframingIcon}
            title="Wireframing"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
          />
          <WorkData
            imgSrc={DesignIcon}
            title="Design"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
          />
          <WorkData
            imgSrc={DevelopmentIcon}
            title="Development"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
