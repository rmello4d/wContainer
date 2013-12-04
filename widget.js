WAF.define('wContainer', function() {
    var widget = WAF.require('waf-core/widget');
    var wContainer = widget.create('wContainer');

	wContainer.inherit(WAF.require('waf-behavior/layout/container'));

	return wContainer;
});
