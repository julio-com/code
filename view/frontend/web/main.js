// 2019-07-30
define(['jquery', 'domReady!'], function($) {return (
/**
 * @param {Object} c
 * @param {HTMLDivElement} e
 */
function(c, e) {
	var $e = $(e);
	var $a = $('a', $e);
	//var $states = $('> div > div', $a);
	$a.click(function() {
		$a.toggleClass('jul-active');
		//$states.toggle();
	});
});});