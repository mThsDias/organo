/* eslint-disable react/prop-types */
import './SuspenseList.css';

const SuspenseList = ({ name, option, value, onChange, required }) => {
  return (
    <div className="suspense-list">
      <label>{name}</label>
      <select value={value} onChange={onChange} required={required}>
        <option value=""></option>
        {option.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SuspenseList;
