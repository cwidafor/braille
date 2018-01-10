<template><div class="app">
	<!-- <input type="text" id="hiddenInput" v-model="inputData"> -->
	<navi></navi>
	<board :data="base"></board>
</div>
</template><script>module.exports = {

	mixins: [

	],

	props: [

	],

	data: function () {
		return{
			base: ''
		}
	},

	computed: {


	},

	methods: {
		keyHandler: function(event){
			var key = event.code,
				base = this.base;
			if(key === "Backspace"){
				this.base = base.substring(0, base.length - 1);
			}else if(key === "Space"){
				this.base += ' ';
			} else if(key.indexOf('Key') > -1) {
				this.base += key[3];
			} else {
				console.log('invalid: ' + key);
			}
		}
	},

	created: function(){

	},
	mounted: function(){
		window.addEventListener("keydown", this.keyHandler, false);
	}
}
</script>