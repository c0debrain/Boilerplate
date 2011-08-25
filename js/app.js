var app = (function($) {
	var self = {
		environment: 'dev', // dev | staging | live

		log: function(message) {
			if ( self.environment == 'dev' && typeof console.debug != 'undefined' ) { console.debug(message); }
		},

		init: function() {
			self.log('Hello, world!');
		}
	}

	$(function() { self.init(); });

	return self;
})(jQuery);
