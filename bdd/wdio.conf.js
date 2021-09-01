exports.config = {
	runner: 'local',
	specs: ['./features/**/*.feature'],
	exclude: [
		// 'path/to/excluded/files'
	],
	maxInstances: 10,
	capabilities: [
		{
			maxInstances: 5,
			browserName: 'chrome',
			acceptInsecureCerts: true,
		},
	],
	logLevel: 'info',
	bail: 0,
	baseUrl: 'http://localhost',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: ['docker'],
	framework: 'cucumber',
	reporters: ['spec', ['allure', { outputDir: './reports/allure-report' }]],
	cucumberOpts: {
		require: ['./features/step-definitions/steps.js'],
		backtrace: false,
		requireModule: ['@babel/register'],
		dryRun: false,
		failFast: false,
		format: ['pretty'],
		snippets: true,
		source: true,
		profile: [],
		strict: false,
		tagExpression: '',
		timeout: 60000,
		ignoreUndefinedDefinitions: false,
	},
};
