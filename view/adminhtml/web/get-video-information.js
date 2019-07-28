// 2019-07-29
// «Implement a video control on product pages similar to asos.com»
// https://github.com/julio-com/core/issues/3
// https://www.upwork.com/ab/f/contracts/22583013
define(['jquery'], function($) {'use strict'; return function(sb) {$.widget('mage.videoData', $.mage.videoData, {
	/**
	 * 2019-07-29
	 * @override
	 * @see mage.videoData::_validateURL()
	 * @private
	 */
	_validateURL: function(href, forceVideo) {return this._super(href, true);}
}); return sb;};});