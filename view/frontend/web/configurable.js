define([
	'jquery', 'mage/utils/wrapper'
], function($, w) {'use strict';
return function(sb) {
$.extend(sb.prototype, {
	generateHtmlImage: w.wrap(sb.prototype.generateHtmlImage, function(_super) {
		var r = _super();
		return r;
	})
});
return sb;};});