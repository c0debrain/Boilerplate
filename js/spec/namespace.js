describe('namespace', function() {
	it('should be defined', function() {
		expect(namespace).toBeDefined();
	});

	it('should not log to console when live', function() {
		namespace.environment = 'live';

		expect(namespace.log('test')).toBeFalsy();
	});
});
