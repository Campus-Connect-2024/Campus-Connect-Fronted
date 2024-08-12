import React, { useState } from "react";

function SearchBox({ placeholder, className="", params}) {
  const [searchValue, setSearchValue] = useState("");
  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  //   console.log(searchValue);
  // };
  return (
    <>
      <input
        type='text'
        placeholder={placeholder}
        className={` ${className}`}
        // value={searchValue}
        // onChange={handleChange}
        {...params}
      />
    </>
  );
}

export default SearchBox;
