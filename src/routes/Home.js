import first from "../Images/01.jpg"
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Homecontent from "../components/Imagesback";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
    return(
        <div>
            <Navbar />
            <Homecontent 
            cName = "container-img"
            firstImg = {first}
            title = "A Journey into the Heart of Cultures"
            text = "Choose Your Favourite Destination."
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "showBtn"
            />
            <Destination />
            <Trip />
            <Footer />
        </div>
    )
}

export default Home;