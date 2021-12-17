import { useEffect, useState } from "react";
import { Save, Share } from "@material-ui/icons";
import Navbar from "../../component/Navbar";
import NotFound from "../../pages/NotFound"
import "./styles/Places.css";

const Page = (params) => {
  const savePlace = () => {};
  const sharePlace = () => {};
  const [place, setPlace] = useState({});

  useEffect(() => {
    const { name } = params.match.params;
    fetch(`/api/places/${name}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${process.env.REACT_APP_WEBSITE_SECRET}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPlace(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="place">
      <Navbar />
      {place.name ? (
          <div className="placeDetails">
            <div className="placeDetails__interact">
              <div className="column1">
                <h1 className="name">{place.name}</h1>
                <p>{place.tagline}</p>
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
                <img src={place.image} />
              </div>

              <div className="physicalDetails">
                <h1>Details:</h1>
                <p>
                  <strong>Official name:</strong> {place.officialName}
                </p>
                {/* Embedd the map here */}
                <iframe
                  className="map"
                  src={place.map}
                  width="300"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>

                <p>
                  <strong>Location:</strong> {place.location}
                </p>
                <p>
                  <strong>Founded:</strong> {place.placeFounded}
                </p>
              </div>
            </div>

            <div className="placeDetails__moreInformation">{place.details}</div>
          </div>
        ) : (
          <NotFound />
        )}
    </section>
  );
};

export default Page;
