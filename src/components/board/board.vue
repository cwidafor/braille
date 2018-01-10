<template><div class="board">
	<div class="board-item" v-for="letter in data">
		<braille :data="letter"></braille>
		<p>{{ letter }}</p>
	</div>
</div>
</template><script>module.exports = {

	mixins: [
		require('../../js/global.js')
	],

	props: [
		'data'
	],

	data: function(){
		return{

		}
	},

	computed: {

	},

	methods: {

	},

	created: function(){

	}
}
</script>