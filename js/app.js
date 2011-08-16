var app = (function($) {
	var self = {
		debug: true,

		log: function(message) {
			if ( self.debug && typeof console !== undefined ) { console.debug(message); }
		},

		init: function() {
			self.log('Hello, world!');
		}
	}

	$(function() { self.init(); });

	return self;
})(jQuery);
