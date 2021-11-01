var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./flex-html-card"
    }
  });

  gulp.watch("flex-html-card/*.html").on("change", reload);
  gulp.watch("flex-html-card/styles/*.css").on("change", reload);

});