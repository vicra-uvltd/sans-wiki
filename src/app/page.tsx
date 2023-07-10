"use client";

import Autocomplete from "@/components/Autocomplete";
import Categories from "@/components/Categories";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  const countriesData = ["Africa", "Armenia", "Canada", "United States"];
  const [countries, setCountries] = useState(countriesData);

  const handleChange = (inputSearch: string) => {
    setCountries(countries.filter((e) => e.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())));
    setValue(inputSearch);
    if (inputSearch === "" || countries.length === 0) {
      setCountries(countriesData);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="py-5">
          <Autocomplete value={value} onChange={handleChange} items={countries} />
        </div>
        <div className="py-5">
          <Categories />
        </div>
      </div>
    </>
  );
}
