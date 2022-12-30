import { fetchApi, baseUrl } from "../../utils/fetchApi";

import Slider from "../../components/Slider";

import millify from "millify";

import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import Image from "next/image";

import { v4 as uuidv4 } from "uuid";

const PropertyDetails = ({ propertyDetails }) => {
  const {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  } = propertyDetails;

  const style = { color: "#4f4a70", fontSize: "2.8rem" };
  return (
    <section className="property-details section-padding">
      {photos && <Slider photos={photos} />}
      <div className="details">
        <div className="details__header">
          <div className="details__title-box">
            {isVerified && (
              <MdVerifiedUser
                style={{ color: "#63d861", fontSize: "4.6rem" }}
              />
            )}
            <h1 className="details__title">{title}</h1>
          </div>
          <div className="details__logo-box">
            <Image
              className="details__logo"
              src={agency.logo.url}
              width={120}
              height={85}
              alt='logo'
            />
          </div>
        </div>
        <div className="details__features">
          <div className="details__feature">
            <FaBed style={style} />
            <p className="details__feature-result">Number of rooms: {rooms}</p>
          </div>
          <div className="details__feature">
            <FaBath style={style} />
            <p className="details__feature-result">Number of baths: {baths}</p>
          </div>
          <div className="details__feature">
            <RiHome2Fill style={style} />
            <p className="details__feature-result">
              Square feet: {area.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <h2 className="details__price">
        Price:
        <span>
          AED {millify(price)} {rentFrequency ? "/" + rentFrequency : ""}
        </span>
      </h2>
      <p className="details__description">{description}</p>
      <div className="details__box">
        <h4 className="details__box-heading">Type:</h4>
        <p className="details__box-info">{type}</p>
      </div>
      <div className="details__box">
        <h4 className="details__box-heading">Furnished Status:</h4>
        <p className="details__box-info">{furnishingStatus}</p>
      </div>
      <div className="details__amentities">
        {amenities.map((item) => (
          <div key={uuidv4()}  className="deatails__amentities-item">{item.text}</div>
        ))}
      </div>
    </section>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetails;
