module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    //tasks 
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass

    uglify: {
      my_target: {  
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        }
      }
    },
       watch: {
      options: { livereload: true },
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass

      js: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //js

      html: {
        files: ['*.html']
      } //html
    } //watch
  }); //initConfig

  //registering task for grunt command
  grunt.registerTask('default', 'watch');
} //exports

