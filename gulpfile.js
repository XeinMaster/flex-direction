var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./flex-direction"
    }
  });

  gulp.watch("flex-direction/*.html").on("change", reload);
  gulp.watch("flex-direction/styles/*.css").on("change", reload);

});