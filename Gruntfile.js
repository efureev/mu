module.exports = function (grunt) {
    var files = [
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
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // the package file to use

        uglify: {
            options: {
                sourceMap: true,
                expand   : true,
                flatten  : true
            },
            default: {
                files: {
                    'dist/mu.min.js': files
                }
            }
        },
        concat: {
            dist: {
                src : files,
                dest: 'dist/mu.js'
            }
        },
        mocha : {
            test: {
                options: {
                    reporter: 'XUnit'
                },
                src    : ['tests/**/*.html'],
                dest   : './test/output/xunit.out',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('install', ['concat', 'uglify']);
    grunt.registerTask('test', ['concat', 'uglify']);
};
