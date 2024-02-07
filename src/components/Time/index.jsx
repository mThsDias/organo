/* eslint-disable react/prop-types */
import Collaborator from '../Collaborator';
import hexToRgba from 'hex-to-rgba';
import './Time.css';

const Time = ({
  name,
  colorPrimary,
  collaborators,
  onChange,
  handleDelete,
  handleFavorite,
}) => {
  return collaborators.length > 0 ? (
    <section
      style={{ background: hexToRgba(colorPrimary, '0.5') }}
      className="time"
    >
      <input
        type="color"
        className="input-color"
        value={colorPrimary}
        onChange={onChange}
      />
      <h3 style={{ borderColor: colorPrimary }}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator
            colorBackground={colorPrimary}
            key={collaborator.name}
            name={collaborator.name}
            office={collaborator.office}
            image={collaborator.image}
            deleteCollaborator={handleDelete}
            handleFavorite={handleFavorite}
            collaborator={collaborator}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Time;
