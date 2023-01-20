import "../FAQ/Accordion.css";
import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";

const AccordionItem = ({ item, onToggle, active }) => {
  const { id, title, content } = item;
  return (
    <div>
      <div className={`accordion_item ${active ? "active" : ""}`}>
        <div className="button" onClick={onToggle}>
          <div className="button-style">
            <div className="id">{id}</div>
            <div className="faq-title">{title}</div>
            <div className="control" >
              {active ? <FaRegWindowMinimize /> : <FaPlus />}
            </div>
          </div>
        </div>
        <div className={`answer_wrapper ${active ? "open" : ""}`}>
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
