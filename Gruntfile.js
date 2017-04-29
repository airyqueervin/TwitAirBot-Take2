module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: './server/server.js'
      }
    },

    shell: {
        multiple: {
          command: [
            'sudo mongod',
            'npm run seed',
            'npm run build:watch',
            'grunt nodemon'
          ].join('&')
        }
      }


  });
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('start', [
    'shell'
    ]
  );
};
