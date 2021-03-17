const gulp        = require('gulp');
const sass        = require('gulp-dart-sass');
const pug         = require('gulp-pug-3');
const browserSync = require('browser-sync').create();
const imagemin    = require('gulp-imagemin');

function minifyImg() {
  gulp.src('default/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images/'))
}

// Compile into CSS
function compileSass() {
  return gulp.src('./default/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

// Compile into HTML
function compilePug() {
  return gulp.src('./default/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

// Browser reload on change
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./default/scss/**/*.scss', compileSass);
  gulp.watch('./default/images/*', minifyImg);
  gulp.watch('./default/pug/*.pug', compilePug);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.minifyImg = minifyImg;
exports.compilePug = compilePug;
exports.watch = watch;