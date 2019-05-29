import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  title: DS.attr('string'),
  phone: DS.attr('string'),
  company: DS.attr('string'),
  department: DS.attr('string'),
  url: DS.attr('string'),
  image: DS.attr('string'),
  primaryAddressId: DS.attr('string'),
  addresses: DS.hasMany('address'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
