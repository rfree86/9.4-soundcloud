import React from 'react';
import { Link } from 'react-router';

var FavoriteDisplay = React.createClass({


  render() {
    return(
    <div>
      <Link to={`/favorites/${this.props.id}`}>
        <p key={this.props.id}>{this.props.title}</p></Link>
    </div>
)
  }
});
export default FavoriteDisplay
