module.exports = {

	data: function(){
		return {
			braille: {
				'000000': 'space',
				'100000': 'a',
				'101000': 'b',
				'110000': 'c',
				'110100': 'd',
				'100100': 'e',
				'111000': 'f',
				'111100': 'g',
				'101100': 'h',
				'011000': 'i',
				'011100': 'j',
				'100010': 'k',
				'101010': 'l',
				'110010': 'm',
				'110110': 'n',
				'100110': 'o',
				'111010': 'p',
				'111110': 'q',
				'101110': 'r',
				'011010': 's',
				'011110': 't',
				'100011': 'u',
				'101011': 'v',
				'011101': 'w',
				'110011': 'x',
				'110111': 'y',
				'100111': 'z',
				'001101': '.',
				'001000': ',',
				'001011': '?',
				'001110': '!',
				'000010': "'"
			}
		}
	},

	methods: {
		toLetter: function(input){
			return this.braille[input];
		},
		toBraille: function(input){
			var answer;
			$.each(this.braille, function(key, letter){
				if(letter == input){
					answer = key;
				}
			});
			console.log(answer);
			return answer;
		}
	},

	filters: {

	}
}
