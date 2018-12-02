module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          //destination of finished: originl
          '_/js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    watch: {
        options: {livereload : true},
        script: {
          files:  ['_/components/js/*.js'],
          task: ['uglify']
        },//scripts
        html: {
          files:  ['*.html']
        }
    }//watch
  }) //initConfig
  //registering task for grunt command
  grunt.registerTask('default', 'watch');
} //exports