'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        nodeunit : {
            all : ['tests/*.js']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'index.js',
                'tests/**/*.js',
                'lib/**/*.js'
            ],
            options: {
                node: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                bitwise: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: false,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                maxparams: 4,
                maxdepth: 3
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');

//    grunt.registerTask('buildDocs', function() {
//        var pkg = grunt.file.readJSON('package.json'),
//            markdown = '';
//
//
//    });

    grunt.registerTask('test', [
        'jshint',
        'nodeunit'
    ]);
};