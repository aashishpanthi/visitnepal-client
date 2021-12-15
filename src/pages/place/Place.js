import { Save, Share } from "@material-ui/icons";
import Navbar from "../../component/Navbar";
import "./styles/Places.css";
import Lumbini from "../../images/LUMBINI.jpg";

const Page = ({ name }) => {
  const savePlace = () => {};
  const sharePlace = () => {};

  return (
    <section className="place">
      <Navbar />

      <div className="placeDetails">
        <div className="placeDetails__interact">
          <div className="column1">
            <h1 className="name">Boudhanath Stupa</h1>
            <p>One of the largest buddhists stupas in the world</p>
          </div>

          <div className="column2">
            <button onClick={savePlace}>
              Save <Save />
            </button>
            <button onClick={sharePlace}>
              Share <Share />
            </button>
          </div>
        </div>

        <div className="placeDetails__visualInfo">
          <div className="imageContainer">
            <img src={Lumbini} />
          </div>

          <div className="physicalDetails">
            <h1>Details:</h1>
            <p>
              <strong>Official name:</strong> Bauddhanath
            </p>
            {/* Embedd the map here */}
            <iframe
            className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13724.67833736765!2d85.34925565227158!3d27.726225574357837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBoudha%20Stupa!5e0!3m2!1sen!2snp!4v1639586942822!5m2!1sen!2snp"
              width="300"
              height="250"
              style={{border:0}}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>

            <p>
              <strong>Location:</strong> Kathmandu, Nepal
            </p>
            <p>
              <strong>Founded:</strong> Around the 14th century
            </p>
          </div>
        </div>

        <div className="placeDetails__moreInformation">
          <p>
            The first stupa at Boudhanath was built sometime after AD 600, when
            the Tibetan king, Songtsen Gampo, converted to Buddhism. In terms of
            grace and purity of line, no other stupa in Nepal comes close to
            Boudhanath. From its whitewashed dome to its gilded tower painted
            with the all-seeing eyes of the Buddha, the monument is perfectly
            proportioned. Join the Tibetan pilgrims on their morning and evening
            koras (circumambulations) for the best atmosphere.
          </p>

          <p>
            According to legend, the king constructed the stupa as an act of
            penance after unwittingly killing his father. The first stupa was
            wrecked by Mughal invaders in the 14th century, so the current stupa
            is a more recent construction.
          </p>
          <p>
            The highly symbolic construction serves in essence as a
            three-dimensional reminder of the Buddha’s path towards
            enlightenment. The plinth represents earth, the kumbha (dome) is
            water, the harmika (square tower) is fire, the spire is air and the
            umbrella at the top is the void or ether beyond space. The 13 levels
            of the spire represent the stages that a human being must pass
            through to achieve nirvana.
          </p>
          <p>
            Stupas were originally built to house holy relics and some claim
            that Boudhanath contains the relics of the past Buddha, Kashyapa,
            while others say it contains a piece of bone from the skeleton of
            Siddhartha Gautama, the historical Buddha. Around the base of the
            stupa are 108 small images of the Dhyani Buddha Amitabha (108 is an
            auspicious number in Tibetan culture) and a ring of prayer wheels,
            set in groups of four or five into 147 niches.
          </p>
          <p>
            To reach the upper level of the plinth, look for the gateway at the
            north end of the stupa, beside a small shrine dedicated to Hariti
            (Ajima), the goddess of smallpox. The plinth is open from 5am to 6pm
            (till 7pm in summer), offering a raised viewpoint over the tide of
            pilgrims surging around the stupa. Note the committed devotees
            prostrating themselves full-length on the ground in the courtyard on
            the east side of the stupa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
