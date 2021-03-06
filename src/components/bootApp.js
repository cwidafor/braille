////////////////////////////////////////////////
//
//Bootsrap File----------
//Sets up the JS for the app.
//Only file needed to be called by Browserfy(gulpfile) to compile all needed javascript.
//
///////////////////////////////////////////////

//Basic Libraries
window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

//Loads main vue lib and other vue libraries
window.Vue = require('vue');

Vue.component('braille', require('./braille/braille.vue'));
Vue.component('navi', require('./navi/navi.vue'));
Vue.component('board', require('./board/board.vue'));

// Create Vue Router
const app = new Vue({
    el: '#app',
	name: 'brailleApp',
    extends: require('./app/app.vue')
});