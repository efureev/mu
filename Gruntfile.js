module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), // the package file to use

		uglify: {
			options: {
				sourceMap: true,
				expand: true,
				flatten: true
			},
			default: {
				files: {
					'dest/mu.min.js': [
						'src/_.js',

						'src/core.js',
						'src/utils.js',
						'src/string.js',
						'src/array.js',
						'src/format.js',
						'src/event.js',
						'src/date.js',
						'src/object.js',

						'src/_l.js'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
