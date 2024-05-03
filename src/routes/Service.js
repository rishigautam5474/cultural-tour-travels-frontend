import first from "../Images/03.jpg";
import Navbar from "../components/Navbar";
import Imagesback from "../components/Imagesback";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
    return (
        <div>
            <Navbar />
            <Imagesback 
            cName = "container-img"
            firstImg = {first}
            title = "Service"
            btnClass = "hideBtn"
            />
            <Trip />
            <Footer />
        </div>
    )
}

export default Service;