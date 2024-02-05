/* eslint-disable react/prop-types */
import './FieldText.css';

const FieldText = ({ name, placeholder, value, onChange, required }) => {
  return (
    <div className="field-text">
      <label>{name}</label>
      <input
        type="text"
        placeholder={`${placeholder}...`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FieldText;
