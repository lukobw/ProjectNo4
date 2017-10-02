module.exports = function (grunt){


  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src: ['main/*.css', 'index.html', 'style/*.css']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './'
        }
      }
    },
    watch: {
      scripts: {
          files: ['main/*.css', 'style/*.css'],
          // tasks: ['concat'],
          options: {
              spawn: false
          },
      }
  }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserSync', 'watch']);

};
