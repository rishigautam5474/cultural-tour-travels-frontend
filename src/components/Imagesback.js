import "./ImagesbackStyle.css";

function Imagesback(props) {
    return (
        <div className={props.cName}>
            <img className="first-Img" src={props.firstImg} alt="HomeImg" />
            <div className="Home-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    )
}

export default Imagesback;