// 2019-07-30
define(['jquery', 'domReady!'], function($) {var ran = false; return (
/**
 * @param {Object} c
 * @param {HTMLDivElement} e
 */
function(c, e) {
	(function() {
		if (!ran) {
			ran = true;
			var $g = $('.gallery-list');
			var $img = $g.children('.product').first();
			$g.prepend(
				$('<video>').attr({
					class: 'jul-video'
					,controls: true
					,height: $img.height()
					,width: $img.width()
				}).append($('<source>').attr({
					src: 'https://video.asos-media.com/products/ASOS/_media_/fb8/fb83c3ae-8dab-4f98-a0a9-e5eec6661487.mp4'
					,type: 'video/mp4'
				}))
			);
		}
	})();
	(function() {
		var $e = $(e);
		var $a = $('a', $e);
		$a.click(function() {
			$a.toggleClass('jul-active');
			if ($a.hasClass('jul-active')) {

			}
			else {

			}
		});
	})();
});});