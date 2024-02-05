/* eslint-disable react/prop-types */
import './Collaborator.css';
import { IoIosCloseCircle } from 'react-icons/io';

const Collaborator = ({
  name,
  office,
  image,
  colorBackground,
  deleteCollaborator,
}) => {
  return (
    <div className="collaborator">
      <IoIosCloseCircle
        className="delete"
        size={25}
        onClick={deleteCollaborator}
      />
      <div className="header" style={{ backgroundColor: colorBackground }}>
        <img src={image} alt={name} />
      </div>
      <div className="footers">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
