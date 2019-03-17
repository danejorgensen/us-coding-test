import Component from '@ember/component';
import $ from 'jquery';

/**
 * You can use any Browserify compatible NPM module you wish.
 *
 * Example:
 * ember install lodash moment
 *
 * import _ from 'npm:lodash';
 * import moment from 'npm:moment';
 **/



/**
 * Component to plot user data.
 *
 * @module Component
 * @class PointsGraphComponent
 * @extends Ember.Component
 **/

export default Component.extend({
	classNames: ['points-graph'], // Class styling in /app/styles/components/points-graph.scss


	// Ember hook called when the component is inserted into the DOM
	didInsertElement() {
		this.draw();
	},


	/**
	 * Draw data on canvas
	 *
	 * @method draw
	 **/

	draw() {
		let $canvas = this.$('canvas'); // jQuery reference to the canvas element in template.hbs

		/**
		 * TODO:
		 *
		 * You may break the code into as many or few functions as you wish.
		 * Fetch data from "http://localhost:4200/data/user-data.json".
		 * Plot data on the canvas. See /public/images/graph.png for an example
		 *   - Each point should have a solid circle of the corresponding set color defined in user-data.json.
		 *   - Points in the same set should be connected sequentially by lines of the corresponding set color.
		 *   - You may use any library to draw on the canvas or call the canvas functions directly.
		 **/

	}


});
