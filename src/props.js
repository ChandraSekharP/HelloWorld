import React from 'react';
import ReactDOM from 'react-dom';
import Properties from './Properties';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <div>
      <Properties name="Carrom" people="4" />
      <Properties name="Cricket" people="22" />
      <Properties name="Chess" people="2" />
    </div>, 
    document.getElementById('mount')
  );
});