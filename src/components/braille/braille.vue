<template><div class="braille" v-if="code != ''">
	<div class="row" v-for="row in 3">
		<div class="column" v-for="column in 2" :class="fillCheck(row, column)"></div>
	</div>
</div>
</template><script>module.exports = {

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
</script>