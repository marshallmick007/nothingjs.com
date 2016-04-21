'use strict';

var gulp = require('gulp');
//var run = require('gulp-run')

//gulp.task('reload', function() {
//  console.log("Reloading Unicorn...");
//  run("bin/restart-unicorn-launchctl.sh").exec()
//    .pipe(gulp.dest('output'));
//});

gulp.task('watch', ['build'], function () {
  gulp.watch('assets/sass/**/*.scss', ['styles']);
  //gulp.watch('assets/js/**/*.*', ['scripts']);
  //gulp.watch('assets/images/**/*', ['images']);
  //gulp.watch('bower.json', ['wiredep']);
  //gulp.watch(['app.rb', 'lib/**/*.rb'], ['reload']);
});

