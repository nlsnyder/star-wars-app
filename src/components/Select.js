const selectClasses =
  "border-2 border-slate-500 transition focus:ring focus:ring-cyan-500 focus:border-sky-500 basis-8 rounded-md mt-2 p-2";

const Select = (props) => {
  const defaultOption = props.name ? `Select one ${props.name}` : "Select";

  const categorySelectedHandler = (e) => {
    props.onCategoryChange(e.target.value);
  };

  return (
    <select
      id={props.id}
      name={props.name}
      className={selectClasses}
      defaultValue="DEFAULT"
      onChange={categorySelectedHandler}
    >
      <option value="DEFAULT" hidden disabled>
        {defaultOption}
      </option>
      {props.fields.map((field) => (
        <option key={field.id} value={field.val}>
          {field.val}
        </option>
      ))}
    </select>
  );
};

export default Select;
