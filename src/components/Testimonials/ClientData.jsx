import ClientImage from "../../images/testimonials/client-image.png";
import "../Testimonials/Testimonials.css";

const ClientData = () => {
  return (
    <div className="client-info">
      <img src={ClientImage} alt="" />
      <div>
        <h5 className="client-name">Jenny Wilson</h5>
        <p className="client-post">Vice President</p>
      </div>
    </div>
  );
};

export default ClientData;
