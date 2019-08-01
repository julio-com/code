define([
	'jquery', 'mage/utils/wrapper'
], function($, w) {'use strict';
return function(sb) {
$.extend(sb.prototype, {
	generateHtmlImage: w.wrap(sb.prototype.generateHtmlImage, function(_super) {
		var r = _super();
		var url = $('div.julio-video').data('video');
		return !url ? r : $('<div>').append(
				$('<video>')
					.attr({class: 'jul-video', controls: true})
					.append($('<source>').attr({src: url, type: 'video/mp4'}))
			).html() + r
		;
	})
});
return sb;};});