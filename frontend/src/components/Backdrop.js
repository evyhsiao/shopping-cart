import "./Backdrop.css";

const Backdrop = ({show, click}) => {
  // if show=ture then do div
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;