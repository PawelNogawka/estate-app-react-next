import { useState } from "react";
import { useRouter } from "next/router";

import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import { fetchApi, baseUrl } from "../utils/fetchApi";

import Image from "next/image";

import { BsFilter } from "react-icons/bs";
import NoFound from "../asstes/no-found.jpg";

const search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <section className="search section-padding">
      <header className="search__header">
        <h1 className="search__heading">search properties by filters</h1>
        <button
          className="search__btn"
          onClick={() => setSearchFilters((searchFilters) => !searchFilters)}
        >
          <BsFilter style={{ fontSize: "4rem", color: "#222" }} />
        </button>
      </header>
      {searchFilters && <SearchFilters />}
      <h2 className="section__heading">Properties {router.query.purpose}</h2>
      <div className="search__container">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
        {properties.length === 0 && (
          <Image
            className="search__no-result"
            src={NoFound}
            alt="no results"
            width={900}
            height={200}
          />
        )}
      </div>
    </section>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default search;
