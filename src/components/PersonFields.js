import MultipleSelect from "./MultipleSelect";
import { Person } from "../data/data";

const PersonFields = (props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="person" className="mb-3">{props.label}</label>
      <MultipleSelect id="person" fields={Person} />
    </div>
  );
};

export default PersonFields;
