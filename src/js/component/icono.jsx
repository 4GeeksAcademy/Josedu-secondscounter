import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Icono = () => {
    return (
      <div className="col-1 bg-secondary card text-bg-primary justify-content-center fs-1 " style={{ height: '6rem' }}>
        <FontAwesomeIcon icon={faClock} />
      </div>
    );
  };


  export default Icono