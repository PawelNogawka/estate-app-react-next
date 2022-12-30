import React from "react";

import Image from "next/image";
import Link from "next/link";

import millify from "millify";

import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";

import DeafultImage from "../asstes/deafult-property.jpg";

const Property = ({ property }) => {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = property;

  const style = { color: "#4f4a70", fontSize: "2.6rem" };

  const src = coverPhoto.url ? coverPhoto.url : DeafultImage;

  return (
    <div className="property">
      <Image
        className="property__img"
        src={src}
        alt="property picture"
        width={400}
        height={240}
      />
      <div className="property__content">
        <h3 className="property__title">
          {isVerified ? (
            <MdVerifiedUser style={{ color: "#63d861", fontSize: "3rem" }} />
          ) : (
            ""
          )}
          {title.length < 30 ? title : title.substring(0, 30) + "..."}
        </h3>
        <h4 className="property__price">
          AED {millify(price)} {rentFrequency ? "/" + rentFrequency : ""}
        </h4>
        <Image
          className="property__logo"
          alt="agency logo"
          src={agency.logo.url}
          width={120}
          height={60}
        />
        <div className="property__features">
          <div className="property__feature">
            <FaBed style={style} />
            <p className="property__feature-result">Number of rooms: {rooms}</p>
          </div>
          <div className="property__feature">
            <FaBath style={style} />
            <p className="property__feature-result">Number of baths: {baths}</p>
          </div>
          <div className="property__feature">
            <RiHome2Fill style={style} />
            <p className="property__feature-result">
              Square feet: {area.toFixed(2)}
            </p>
          </div>
        </div>
        <Link className="property__link" href={`/property/${externalID}`}>
          read more
        </Link>
      </div>
    </div>
  );
};

export default Property;
