/* eslint-disable react/prop-types */
import './Collaborator.css';
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

const Collaborator = ({
  name,
  office,
  image,
  colorBackground,
  deleteCollaborator,
  handleFavorite,
  collaborator,
}) => {
  const favorite = () => {
    handleFavorite(collaborator.id);
  };

  const propsFavorite = {
    size: 25,
    onClick: favorite,
  };

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
        <div className="favorite">
          {collaborator.favorite ? (
            <IoIosHeart
              style={{ color: '#ff0000', cursor: 'pointer' }}
              {...propsFavorite}
            />
          ) : (
            <IoIosHeartEmpty style={{ cursor: 'pointer' }} {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
