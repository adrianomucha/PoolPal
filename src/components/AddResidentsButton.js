import React from 'react';

const AddResidentsButton = () => {
  const handleClick = () => {
    // Navigate to add residents page or open a modal
    console.log('Navigate to add residents page');
  };

  return (
    <button className="add-residents-btn" onClick={handleClick}>
      Add residents
    </button>
  );
};

export default AddResidentsButton;