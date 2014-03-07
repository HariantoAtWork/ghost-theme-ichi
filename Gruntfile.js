//Gruntfile
module.exports = function(grunt) {

//Initializing the configuration object
grunt.initConfig({

    // Paths variables
    paths: {
      // Development where put LESS files, etc
      assets: {
        css: './assets/less/',
        js: './assets/js/'
      },
      // Production where Grunt output the files      
      css: './assets/css/',
      js: './assets/js/'

    },

    // Task configuration
    concat: {  
      //...
    },  
    less: {
        development: {
            options: {
              compress: false,  //not minifying the result
            },
            files: {
              //compiling ichi.less into screen.css
              "<%= paths.css %>screen.css":"<%= paths.assets.css %>ichi.less"
            }
        },
        production: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling ichi.less into screen.css
              "<%= paths.css %>screen.min.css":"<%= paths.assets.css %>ichi.less"
            }
        }

    },
    uglify: {
      //...
    },  
    phpunit: {
      //...
    },  
    watch: {
      less: {
        files: ['<%= paths.assets.css %>*.less', '<%= paths.assets.css %>**/*.less'],  //watched files
        tasks: ['less'],                          //tasks to run
        options: {
          livereload: true                        //reloads the browser
        }
      }
    }  
});

// Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task definition
  grunt.registerTask('default', ['watch']);

};