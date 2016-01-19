module.exports = function (config)
{
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',


		// frameworks to use
		frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            {pattern: 'app/js-src/controllers/*.js', included: false},
            {pattern: 'app/js-src/services/*.js', included: false},
			{pattern: 'app/js-src/directives/*.js', included: false},
            {pattern: 'app/js-src/app.js', included: false},
            {pattern: 'app/js-src/routes.js', included: false},
            {pattern: 'test/unit/**/*Spec.js', included: false},
            'test/test-main.js'
        ],

		// list of files to exclude
		exclude: [
			'karma.conf.js'
		],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress', 'coverage','junit'],
		preprocessors:
		{
			'app/js-src/**/*.js': ['coverage'],
            '**/*.html': ['html2js']
		},
		coverageReporter:
		{
			dir: 'coverage/',
			reporters: [

				{ type: 'html',subdir: 'html'},  //For Linux Dev only due to a bug with Windows Coverage
				{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
				{ type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
				{ type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
				{ type: 'text', subdir: '.', file: 'text.txt' },
				{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
			]
		},

		junitReporter :
		{
			outputDir: 'test/jUnitTest/', // results will be saved as $outputDir/$browserName.xml
			outputFile: 'unitTests.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
			suite: '', // suite will become the package name attribute in xml testsuite element
			useBrowserName: true // add browser name to report and classes names
		},


		// web server port
		port: 9877,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		plugins: [
			'karma-requirejs',
			'karma-jasmine',
			'karma-phantomjs-launcher',
            'karma-firefox-launcher',
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-junit-reporter',
            "karma-html2js-preprocessor"
        ],

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
