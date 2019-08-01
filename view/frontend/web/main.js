// 2019-07-30
define(['jquery', 'df-scroll', 'domReady!'], function($) {return (
/**
 * @param {Object} c
 * @param {String} c.url
 * @param {HTMLDivElement} e
 */
function(c, e) {
	var $e = $(e);
	var $a = $('a', $e);
	var is1Column = $e.hasClass('julio-video-1column');
	var is2Columns = $e.hasClass('julio-video-2columns');
	$a.toggleClass('df-hidden', !$e.data('video'));
	// 2019-08-01 https://www.w3schools.com/howto/howto_js_fullscreen.asp
	function fs(e) {
		e.requestFullscreen ? e.requestFullscreen() : (
			e.mozRequestFullScreen ? e.mozRequestFullScreen() : (
				e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : (
					e.msRequestFullscreen ? e.msRequestFullscreen() : $(window).scrollTo('.breadcrumbs')
				)
			)
		);
	}
	$a.click(function() {
		if (is2Columns) {
			$(window).scrollTo('.breadcrumbs');
		}
		var c = 'jul-active';
		$a.toggleClass(c);
		var $v = $('video.jul-video'); // 2019-08-01 We can not cache this block.
		var on = $a.hasClass(c);
		$v.toggle(on);
		if (is1Column) {
			fs($v.get(0));
		}
		on ? $v.get(0).play() : $v.get(0).pause();
	});
});});