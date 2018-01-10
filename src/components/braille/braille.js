module.exports = {

	mixins: [
		require('../../js/global.js')
	],

	props: [
		'data'
	],

	data: function () {
		return {
			code: ''
		}
	},

	computed: {


	},

	methods: {
		fillCheck: function(row, column){
			var location = (parseInt(row - 1) * 2) + (parseInt(column)) - 1;
			if(this.code[location] == 1){
				return ['filled'];
			}
			return [];
		}
	},

	created: function(){
		this.code = this.toBraille(this.data.toLowerCase());
	}
}
