import DS from 'ember-data';

export default DS.Model.extend({
  person: DS.belongsTo('person'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
});
