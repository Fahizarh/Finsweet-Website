import '../WorkSection/WorkSection.css'

const WorkData = (props) => {
  return (
    <div className='work-feature'>
      <img src={props.imgSrc} alt="icon" className='icon'/>
      <h3 className='work-feature-title'>{props.title}</h3>
      <p className='work-feature-description'>{props.description}</p>
    </div>
  );
};

export default WorkData;
