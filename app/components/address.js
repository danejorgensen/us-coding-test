import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  primaryAddress: computed('person.addresses.[]', function() {
    return this.get('person.addresses').find(x => x.id === this.get('person.primaryAddressId'));
  }),
  address: computed('primaryAddress', function() {
    return this.get('primaryAddress')['address'];
  }),
  cityStateZip: computed('primaryAddress', function() {
    let pa = this.get('primaryAddress');
    return `${pa['city']}, ${pa['state']} ${pa['zip']}`;
  }),
});
