import React from "react";

import Link from "next/link";
import Image from "next/image";

import { AiOutlineCheckCircle } from "react-icons/ai";

import AboutImg from "../asstes/about.png";
import CompanyImg from "../asstes/company.png";

const ContentInfo = () => {
  const style = { color: "#4f4a70", fontSize: "3rem" };
  return (
    <div className="content section-padding">
      <h3 className="section__heading">
        just choose the apartment that suits you best from our database
      </h3>
      <div className="content__container ">
        <div className="content__row">
          <h4 className="content__head">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            eveniet mollitia delectus, reprehenderit maxime pariatur amet.
          </h4>
          <div className="content__features">
            <div className="content__feature">
              <AiOutlineCheckCircle style={style} />
              <p className="content__feature-info">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="content__feature">
              <AiOutlineCheckCircle style={style} />
              <p className="content__feature-info">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="content__feature">
              <AiOutlineCheckCircle style={style} />
              <p className="content__feature-info">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <Link href="/search" className="content__btn">
            search properties
          </Link>
        </div>
        <div className="content__img-box">
          <Image src={AboutImg} alt="about img" />
        </div>
      </div>
      <Image
        src={CompanyImg}
        alt="Company info"
        className="content__company-img"
      />
    </div>
  );
};

export default ContentInfo;
