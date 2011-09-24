var namespace = (function($) {
	var app = {
		environment: 'dev', // dev | staging | live

		log: function(message) {
			if ( app.environment == 'dev' && typeof console.debug != 'undefined' ) {
				console.debug(message);

				return true;
			}
		},

		init: function() {
			app.log('Hello, world!');
		}
	}

	$(function() { app.init(); });

	return app;
})(jQuery);
