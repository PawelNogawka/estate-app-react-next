import React from "react";

import Link from "next/link";
import Image from "next/image";

import BannerImage from "../asstes/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__header">
          <p className="banner__subtitle">rent property</p>
          <h1 className="banner__heading">Rental great Homes for Everyone.</h1>
          <p className="banner__info">
            Explore from Apartments, builder floors, villas and more
          </p>
          <div className="banner__buttons">
            <Link
              href="/search?purpose=for-rent"
              className="btn banner__link banner__link--rent"
            >
              explore renting
            </Link>
            <Link
              href="/search?purpose=for-sale"
              className="btn banner__link banner__link--buy"
            >
              explore buying
            </Link>
          </div>
        </div>
        <div className="banner__img-box">
          <Image src={BannerImage} alt="banner image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
