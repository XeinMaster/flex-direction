var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./align-self"
    }
  });

  gulp.watch("align-self/*.html").on("change", reload);
  gulp.watch("align-self/styles/*.css").on("change", reload);

});