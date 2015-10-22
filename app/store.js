import $ from 'jquery';
import Backbone from 'backbone';

let favorites;

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader('X-Parse-Application-Id', 'Vm6p9gLXXbCvEh1eYtLjexOfFqY4IuObXSieZWAl');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'uzfgiFRnLO4tfEc1Aj7wCdSWNoQfreKuU8isGLvH');
    }
  }
})

const Favorite = Backbone.Model.extend({
  idAttribute: "objectId",

});

const FavoritesCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/favorites",
  model: Favorite,
  parse(response) {
    return response.results;
  }
});

export default {
  getFavoritesCollection(){
    return (favorites = favorites || new FavoritesCollection())
  },

  getNewFavorite() {
    return new Favorite();
  }
};
