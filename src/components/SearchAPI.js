import React, { useState } from "react";
import PersonFields from "./PersonFields";
import Select from "./Select";
import { categoryOptions } from "../data/data";

const SearchAPI = (props) => {
  const [categorySelected, setCategorySelected] = useState("");

  const categoryChangeHandler = (val) => {
    setCategorySelected(val);
  };

  return (
    <div
      id="apiSearch"
      className="border-2 border-sky-700 w-3/5 p-4 mx-auto rounded-lg shadow-lg"
    >
      <form>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col">
            <label htmlFor="category"className="mb-2">Select a Category</label>
            <Select
              id="category"
              name="category"
              fields={categoryOptions}
              onCategoryChange={categoryChangeHandler}
            />
          </div>
          {categorySelected === "People" && (
            <PersonFields label="Select Fields" />
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchAPI;
