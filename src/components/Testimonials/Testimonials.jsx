import ClientData from "./ClientData";
import BackwardArrow from "../../images/testimonials/backward-arrow.png";
import ForwardArrow from "../../images/testimonials/forward-arrow.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-content container">
        <div className="left-content">
          <h3 className="title">What our clients say about us</h3>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className="right-content">
          <div>
            <h3 className="review">
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h3>
          </div>
          <div className="bottom">
            <ClientData />
            <div>
              <button className="backward-arrow">
                <img src={BackwardArrow} alt="" />
              </button>
              <button className="forward-arrow">
                <img src={ForwardArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
