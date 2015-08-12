module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // CONFIG ===================================/

        watch: {
            compass: {
                files: ['assets/scss/*.scss'],
                tasks: ['compass:dev']
            },

            js: {
                files: ['assets/js/app/*.js'],
                tasks: ['uglify']
            }
        },

        compass: {
            dev: {
                options: {              
                    sassDir: ['assets/scss'],
                    cssDir: ['assets/css'],
                    imagesDir: ['assets/img'],
                    fontsDir: ['assets/fonts'],
                    sourcemap: true,
                    environment: 'development'
                }
            },

            prod: {
                options: {
                    sassDir: ['assets/scss'],
                    cssDir: ['assets/css'],
                    imagesDir: ['assets/img'],
                    fontsDir: ['assets/fonts'],
                    environment: 'production'
                }
            }
        },

        uglify: {
            all: {
                files: {
                    'assets/js/app.min.js': [
                        'assets/lib/jquery/dist/jquery.min.js',
                        'assets/js/lib/*.js',
                        'assets/js/app/*.js'
                    ]
                }
            },
        },


    });

    // DEPENDENT PLUGINS =========================/

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // TASKS =====================================/

    grunt.registerTask('default', ['compass:dev' , 'uglify' , 'watch']);

};
