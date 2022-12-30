import React, { useState } from "react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../utils/filterData";

import { v4 as uuidv4 } from "uuid";

const SearchFilters = (filterValues) => {
  const [filters, setFilters] = useState(filterData);
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
  };

  return (
    <div className="filters">
      {filters.map((filter) => (
        <select
          onChange={(e) =>
            searchProperties({ [filter.queryName]: e.target.value })
          }
          className="filters__select"
          key={uuidv4()}
        >
          <option selected disabled hidden className="filters__option">
            {filter.placeholder}
          </option>
          {filter.items.map((item, index) => (
            <option
              key={uuidv4()}
              value={item.value}
              className="filters__option"
            >
              {item.name}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

export default SearchFilters;
