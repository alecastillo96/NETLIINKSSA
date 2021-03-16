const gulp        = require('gulp');
const sass        = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

// Compile into CSS
function compileSass() {
  return gulp.src('./default/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./default/scss/**/*.scss', compileSass);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.watch = watch;