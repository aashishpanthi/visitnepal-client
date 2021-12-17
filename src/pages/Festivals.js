import Navbar from "../component/Navbar";
import DashainImg from "../images/dashain.jpg";
import TiharImg from "../images/tihar.jpg";
import ChhathImg from "../images/chhath.jpg";
import TeejImg from "../images/teej.jpg";
import Bottom from "../component/Bottom"
import "./styles/festivals.css";

const Festivals = () => {
  return (
    <>
      <section className="festivals-intro">
        <Navbar />
        <div className="festivals-main">
          <h1>Festivals of Nepal</h1>
          <p>
            In Nepal, <span>
              every other building is a temple and every other day is a
              festival.
            </span>
          </p>
        </div>
      </section>
      <section className="festivals">
        <div className="festival-container">
          <div className="image-container-festival">
            <img
              src={DashainImg}
              alt="parents-putting-tika-on-forehead"
              className="festival-img"
            />
          </div>
          <div className="festival-box">
            <h3 className="headings">Dashain</h3>
            <p>
              Dashain commemorates a great victory of the gods over the wicked
              demons. It is said that lord Ram was successful in the battle only
              when goddess Durga was evoked. The main celebration glorifies the
              triumph of good over evil and is symbolized by goddess Durga
              slaying the terrible demon Mahisasur, who terrorised the earth in
              the guise of a brutal water buffalo. The first nine days signify
              the nine days of ferrous battle between goddess Durga and the
              demon Mahisasur.
              <br />
              <br />
              The tenth day is the day when Mahisasur was slain and the last
              five days symbolise the celebration of the victory with the
              blessing of the goddess. Dashain is celebrated with great rejoice,
              and goddess Durga is worshiped throughout the kingdom as the
              divine mother goddess.
            </p>
          </div>
        </div>

        <div className="festival-container">
          <div className="festival-box">
            <h3>Tihar</h3>
            <p>
              Tihar usually takes place in Nepali Kartik month (Octorber to
              November in Solar Calendar) and continues for five days. It's
              celebrated for five days and bestowed with traditional cultural
              characteristics of Nepal. And each Tihar holiday has its own
              saying.
              <br />
              <br />
              The first day of Tihar is to worship crows, "the messenger of
              death". People often sprinkle rice on the ground for crows'
              pecking. The second day of Tihar is to honor dogs, "the guardian
              for the god of death". The third day is to welcome the Goddess of
              Laxmi. The forth day is to thank cows. The fifth day is to place
              Tihar quotes (Tihar Tika) to brothers and present Tihar gifts for
              sisters.
            </p>
          </div>

          <div className="image-container-festival">
            <img src={TiharImg} alt="diyo-in-tihar" className="festival-img" />
          </div>
        </div>

        <div className="festival-container">
          <div className="image-container-festival">
            <img src={ChhathImg} alt="chhath-parba" className="festival-img" />
          </div>
          <div className="festival-box">
            <h3 className="headings">Chhath</h3>
            <p>
              Chhath parva is celebrated by natives of Mithila region of Nepal
              and India. This festival is dedicated to god Sun. Sun is called
              Surya in Sanscrit, Chhat parba is thanks giving to lord Surya for
              sustaining life on earth and to worship him to provide his
              continuous blessings to mankind.
              <br />
              <br />
              The Sun, source power of nature, considered the god of energy and
              lord of the life-force, is worshiped in Chhath to promote
              well-being, prosperity and progress. Hindu people believe sun
              helps to cure many illness and diseases. Sun is considered as
              source of healing too. Sun is also considered as token of
              stability and prosperity. Therefore, people worship sun to ensure
              the longevity and prosperity of family members, friends and
              beloved ones.
            </p>
          </div>
        </div>

        <div className="festival-container">
          <div className="festival-box">
            <h3>Teej</h3>
            <p>
              Teej is a festival celebrated by Nepali women, for the long life
              of her husband and long and firm relationship between them until
              the death this life and all the lives to come. Teej is observed
              for marital happiness, well-being of spouse and children and
              purification of own body and soul. <br />
              <br />
              Teej is the most famous festival among Nepali women. The folk
              music and dances add more flavor to traditional values of Teej. It
              is fascinating to see women, in “Red” dancing and singing on the
              street, going to temple in holy and fasting mood. Teej is also
              called Hari Talika Teej. This festival is celebrated by Nepali
              Hindu women all across the world.
            </p>
          </div>

          <div className="image-container-festival">
            <img src={TeejImg} alt="diyo-in-tihar" className="festival-img" />
          </div>
        </div>
      </section>
      <Bottom />
    </>
  );
};

export default Festivals;
