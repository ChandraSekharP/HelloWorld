import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */

class Properties extends React.Component {
    render() {
      return (
        <ul>
            <li>{this.props.name}</li>
            <li>{this.props.people}</li>
        </ul>
      );
    }
}

export default Properties;