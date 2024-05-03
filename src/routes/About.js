import first from "../Images/02.jpg"
import Navbar from "../components/Navbar";
import Imagesback from "../components/Imagesback";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

function About() {
    return(
        <div>
            <Navbar />
            <Imagesback 
            cName = "container-img"
            firstImg = {first}
            title = "About"
            btnClass = "hideBtn"
            />
            <Aboutus />
            <Footer />
        </div>
    )
}

export default About;