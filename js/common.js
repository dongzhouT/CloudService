function comdify(input) {
	var n = parseFloat(input).toFixed(1);
	var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
	return n.replace(re, "$1,");
}
