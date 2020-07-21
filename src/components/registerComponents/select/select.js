import React, { useEffect } from 'react';
import M from 'materialize-css';

const Select = ({ defaultRegions, handleOnChange, selectValue }) => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="input-field col s6">
      <select
        id="region"
        name="regional_center"
        onChange={event => handleOnChange(event)}
        value={selectValue}
      >
        <option value="" disabled>Escoge tu región</option>
        {defaultRegions.map((region, index) => (<option key={index} value={region}>{region}</option>))}
      </select>
      <label htmlFor="region">Centro Regional</label>
    </div>
  );
};

export default Select;