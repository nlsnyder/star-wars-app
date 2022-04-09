import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { personData } from "../data/data";

// const selectClasses =
//   "border-2 border-slate-500 transition focus:ring focus:ring-cyan-500 focus:border-sky-500 basis-8 rounded-md mt-2 p-4";

const MultipleSelect = (props) => {
  const [chosenOptions, setChosenOptions] = useState(['name']);

  const autoChange = (e, value) => {
    setChosenOptions(value);
  };

  return (
    <Autocomplete
      onChange={autoChange}
      className="mb-2 w-auto min-w-40"
      multiple
      freeSolo
      options={personData}
      defaultValue={[personData[0]]}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            className="w-10"
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Selections"
          placeholder="Enter fields"
        />
      )}
    />
  );
};

export default MultipleSelect;
