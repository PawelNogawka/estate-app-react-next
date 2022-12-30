import React, { useState } from "react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = (filterValues) => {
  const [filters] = useState(filterData);
  const router = useRouter();
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
    console.log(query);
  };

  return (
    <div className="filters">
      {filters.map((filter) => (
        <select
          onChange={(e) =>
            searchProperties({ [filter.queryName]: e.target.value })
          }
          className="filters__select"
          key={filter.queryName}
        >
          <option selected disabled hidden className="filters__option">
            {filter.placeholder}
          </option>
          {filter.items.map((item) => (
            <option value={item.value} className="filters__option">
              {item.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default SearchFilters;
