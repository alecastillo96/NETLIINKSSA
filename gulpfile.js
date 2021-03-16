const gulp        = require('gulp');
const sass        = require('gulp-dart-sass');
const pug         = require('gulp-pug-3');
const browserSync = require('browser-sync').create();

// Compile into CSS
function compileSass() {
  return gulp.src('./default/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function compilePug() {
  return gulp.src('./default/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./default/scss/**/*.scss', compileSass);
  gulp.watch('./default/pug/*.pug', compilePug);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.compilePug = compilePug;
exports.watch = watch;