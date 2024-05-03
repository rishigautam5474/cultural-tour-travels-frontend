import first from "../Images/04.jpg";
import Navbar from "../components/Navbar";
import Imagesback from "../components/Imagesback";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact() {
    return(
        <div>
            <Navbar />
            <Imagesback 
            cName = "container-img"
            firstImg = {first}
            title = "Contact"
            btnClass = "hideBtn"
            />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Contact;