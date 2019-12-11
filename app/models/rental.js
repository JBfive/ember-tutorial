import Model from '@ember-data/model';
import DS from 'ember-data';
//the line below was used on the site, but causes an error, works while removed.
//const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
});
