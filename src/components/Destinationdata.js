import "./DestinationStyle.css";

const Destinationdata = (props) => {
  return (
    <div>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
          <p>{props.text2}</p>
        </div>
        <div className="images">
          <img src={props.img1} alt="Kedarnath" />
          <img src={props.img2} alt="Kedarnath" />
        </div>
      </div>
    </div>
  );
};

export default Destinationdata;
