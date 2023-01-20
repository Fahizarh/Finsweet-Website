import "../Features/Features.css";

const FeaturesData = (props) => {
  return (
    <div className="features-card">
      <div className="feature-card">
        <img src={props.imgSrc} alt="" className="feature-icon" />
        <h3 className="feature-card-title">{props.title}</h3>
        <p className="feature-card-description">{props.description}</p>
      </div>
    </div>
  );
};

export default FeaturesData;
