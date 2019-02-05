/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            files: ['dist'],
            publish: ['dist/jsql-superagent-plugin.js']
         },


        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['node_modules/jsql-core/jsql-core.min.js', 'src/jsql-superagent-plugin.js'],
                dest: 'dist/jsql-superagent-plugin.js'
            },
            local: {
                src: ['../jsql-js-core/dist/jsql-core.min.js', 'src/jsql-superagent-plugin.js'],
                dest: 'dist/jsql-superagent-plugin.js'
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/jsql-superagent-plugin.min.js': ['dist/jsql-superagent-plugin.js']
                }
            }
        },


        copy: {

            dist: {

                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['isc.md', 'package.json'],
                        dest: './dist'
                    }
                ]

            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask('dev', ['concat:local']);
    grunt.registerTask('default', ['concat:dist', 'copy', 'uglify', 'clean:publish']);

};
