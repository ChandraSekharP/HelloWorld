import React from 'react';
import ReactDOM from 'react-dom';
import SampleText from './SampleText';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <div>
      <SampleText />
    </div>,
    document.getElementById('mount')
  );
});