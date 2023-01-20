import "../Form/Form.css";

const Form = () => {
  return (
    <section className="form__section">
      <div className=" form-content container">
        <div className="left-form-content">
          <h3>Building stellar websites for early startups</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>

        <div>
            <h4>Send Inquiry</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form action="" className="form">
                <input type="text" placeholder="Your Name"/><br />
                <input type="email" placeholder="Email"/><br />
                <input type="url" placeholder="Paste your Figma design URL"/><br />
                <button>Send an Inquiry</button><br />
                <button>Get in touch with us &#8594;</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
