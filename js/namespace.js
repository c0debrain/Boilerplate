var namespace = namespace || (function($) {
	var app = {
		environment: 'dev', // dev | staging | live

		log: function(message) {
			if ( app.environment === 'dev' && typeof console !== 'undefined' && typeof console.log !== 'undefined' ) {
				console.log(message);

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
