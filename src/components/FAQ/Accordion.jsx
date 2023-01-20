import { Data } from "./Data";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import "../FAQ/Accordion.css";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="faq__section">
      <div className="container faq-content">
        <div className="left-content">
          <h3 className="title">Frequently asked questions</h3>
          <p className="description">Contact us for more info</p>
        </div>
        <div className="right-content">
          {Data.map((item, index) => (
            <AccordionItem
              onToggle={() => handleToggle(index)}
              active={clicked === index}
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
