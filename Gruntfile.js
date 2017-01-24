'use strict';

var path = require('path');
var mockApi = require('swagger-mock-api');

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          middleware: [
            mockApi({
                  swaggerFile: path.join(__dirname, 'api.yml'),
                  watch: false // enable reloading the routes and schemas when the swagger file changes
              })
          ],
        },
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);
};
