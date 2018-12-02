module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    //tasks 
    uglify: {
      my_target: {
        files: {
          //destination of finished: originl
          '_/js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options: {
          config : 'config.rb'
        }//options
      }//dev
    }, //compass
    watch: {
        options: {livereload : true},
        script: {
          files:  ['_/components/js/*.js'],
          task: ['uglify']
        },//scripts
        sass: {
          files: ['_/components/sass/*.scss'],
          task: ['compass:dev']
        },//sass
        html: {
          files:  ['*.html']
        }//html
    }//watch
  }) //initConfig
  //registering task for grunt command
  grunt.registerTask('default', 'watch');
} //exports