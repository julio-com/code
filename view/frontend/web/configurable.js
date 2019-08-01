define([
	'jquery', 'mage/utils/wrapper'
], function($, w) {'use strict';
return function(sb) {
$.extend(sb.prototype, {
	generateHtmlImage: w.wrap(sb.prototype.generateHtmlImage, function(_super) {
		var r = _super();
		return $('<div>').append($('<video>')
			.attr({class: 'jul-video', controls: true})
			.append($('<source>').attr({
				src: 'https://video.asos-media.com/products/ASOS/_media_/fb8/fb83c3ae-8dab-4f98-a0a9-e5eec6661487.mp4'
				,type: 'video/mp4'
			})))
			.html()
			+ r
		;
	})
});
return sb;};});