import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.getJSON('data/people.json')
      .then(data => {
        //this.get('store').pushPayload(data);
        //return this.get('store').peekAll('people');

        return data;
      });
  }
});
