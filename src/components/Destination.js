import firstimg from "../Images/05.jpg";
import secondimg from "../Images/06.jpg";
import thirdimg from "../Images/07.jpg";
import forthimg from "../Images/08.jpg";
import "./DestinationStyle.css";
import Destinationdata from "./Destinationdata";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>"Travel is the only thing you buy that makes you richer."</p>
      <Destinationdata
        heading="The Kedarnath Temple, Kedarnath" cName="first-des"
        text="The Kedarnath Temple is a Hindu temple located in Kedarnath,
      Uttarakhand, India. It is one of the twelve jyotirlingas of Lord
      Shiva. The temple is situated on the Garhwal Himalayan range near
      the Mandakini river."
        text2="The Kedarnath Temple is known for its exquisite architecture. It is
      built of extremely large, heavy, and evenly cut grey slabs of
      stones, which evokes wonder. The temple holds great religious
      significance and attracts devotees from all over the world."
        img1={firstimg}
        img2={secondimg}
      />
      <Destinationdata
        heading="The World Famous Manali" cName="first-des-reverse"
        text="Manali is a popular tourist destination located in the state of Himachal Pradesh, India. It is known for its scenic beauty, snow-capped mountains, adventure activities, and serene landscapes."
        text2="The current weather in Manali, India is cloudy with a temperature of 35.0°C. The real feel temperature is 41.5°C, which is considered dangerous heat. The relative humidity is 67%. The wind is coming from the SSE direction with a speed of 23.9 km/h. The UV index is low, and the cloud cover is 99%. The atmospheric pressure is 1004.0 mb. Please note that this information is based on real-time data and may change."
        img1={thirdimg}
        img2={forthimg}
      />
    </div>
  );
};

export default Destination;
