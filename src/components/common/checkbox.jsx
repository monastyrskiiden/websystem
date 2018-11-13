import React from 'react';

const Checkbox = props => {
  const { checked, onChange } = props;
  return (
    <div className="input-group-prepend">
      <div className="input-group-text">
        <input
          type="checkbox"
          aria-label="Checkbox"
          style={{ cursor: 'pointer' }}
          checked={checked}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Checkbox;
