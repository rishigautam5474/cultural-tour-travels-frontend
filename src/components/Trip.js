import tripimg1 from "../Images/09.jpg";
import tripimg2 from "../Images/10.jpg";
import tripimg3 from "../Images/11.jpg";
import Tripdata from "./Tripdata";
import "./TripStyle.css";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
        img={tripimg1}
        heading="Trip In Indonesia"
        text="Tourism in Indonesia is an important component of the Indonesian economy and a significant source of foreign exchange revenues. Indonesia offers diverse beauty, culture, and adventure for travelers. You can explore Indonesia's tropical paradise and plan your journey through the official website of Indonesia Tourism."
        />
        <Tripdata
        img={tripimg2}
        heading="Trip In England"
        text="England is a country that is part of the United Kingdom. It is located on the island of Great Britain, covering roughly 62% of the island. England is the largest of the four countries that make up the United Kingdom, with the other three being Scotland, Wales, and Northern Ireland. It is bounded on the north by Scotland, on the west by the Irish Sea, Wales, and the Atlantic Ocean, and on the south by the English Channel."
        />
        <Tripdata
        img={tripimg3}
        heading="Trip In Japan"
        text="Japan is an island country located in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan. Japan is known for its rich history, culture, and technological advancements. The country is made up of four main islands: Hokkaido, Honshu, Shikoku, and Kyushu, along with numerous smaller islands. Tokyo is the capital and largest city of Japan."
        />
      </div>
    </div>
  );
};

export default Trip;
