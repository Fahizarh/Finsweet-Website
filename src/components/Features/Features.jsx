import "../Features/Features.css";
import Icon1 from "../../images/icons/design-icon1.png";
import Icon2 from "../../images/icons/design-icon2.png";
import Icon3 from "../../images/icons/design-icon3.png";
import Icon4 from "../../images/icons/design-icon4.png";
import Icon5 from "../../images/icons/design-icon5.png";
import Icon6 from "../../images/icons/design-icon6.png";
import FeaturesData from "./FeaturesData";

const Features = () => {
  return (
    <section className="features__section">
      <div className="container">
        <div className="features-heading">
          <p className="feature-name">Features</p>
          <h3 className="feature-title">Design that solves problems, one product at a time</h3>
        </div>
        <div className="features-info">
          <FeaturesData
            imgSrc={Icon1}
            title="Uses Client First"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <FeaturesData
            imgSrc={Icon2}
            title="Two Free Revision Round"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <FeaturesData
            imgSrc={Icon3}
            title="Template Customization"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <FeaturesData
            imgSrc={Icon4}
            title="24/7 Support"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <FeaturesData
            imgSrc={Icon5}
            title="Quick Delivery"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
          <FeaturesData
            imgSrc={Icon6}
            title="Hands-on approach"
            description="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
