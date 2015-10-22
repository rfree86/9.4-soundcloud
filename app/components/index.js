import React from 'react';
import store from 'store';
import FavoriteDisplay from './favoriteDisplay';

var Index = React.createClass({
propTypes: {

  favorites: React.PropTypes.object,
  children: React.PropTypes.object
},
getDefaultProps(){
  return{
    favorites: store.getFavoritesCollection()
  }
},

componentWillMount() {
  this.props.favorites.fetch();
  this.props.favorites.on('sync add remove',
    this.forceUpdate.bind(this, null),this);
},

componentWillUnmount() {
  this.props.favorites.off('sync add remove', null, this);
},

render() {
  var favorites = this.props.favorites.toJSON();
  return (
    <div>
    <h1>Favorites List</h1>
    {this.props.children}

        {favorites.map((r) =>

        <FavoriteDisplay key={r.objectId}{...r} />
        )}
    </div>
  )
}
})

export default Index;
