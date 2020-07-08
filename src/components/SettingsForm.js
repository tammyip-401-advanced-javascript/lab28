import React, { useContext } from 'react';
import SettingsContext from '../SettingsContext';

function SettingsForm(props) {
  const data = useContext(SettingsContext);

  return (
    <div>
      <h1></h1>
      <label>Display Count: &nbsp;&nbsp; </label>
      <input
        type='number'
        value={data.displayCount}
        onChange={(e) => {
          data.setDisplayCount(parseInt(e.target.value));
        }}
      />

      <label> &nbsp;&nbsp; Show All Tasks &nbsp;&nbsp;</label>
      <input
        type='checkbox'
        checked={data.showCompleted}
        onChange={(e) => {
          data.setShowCompleted(!data.showCompleted);
        }}
      />
    </div>
  );
}

export default SettingsForm;
