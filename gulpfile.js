const gulp        = require('gulp');
const sass        = require('gulp-dart-sass');
const pug         = require('gulp-pug-3');
const browserSync = require('browser-sync').create();
const imagemin    = require('gulp-imagemin');
const minCss =  require('gulp-clean-css');
const babel = require('gulp-babel');
const cleancss =  require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

const minifyImg = () => {
  gulp.src('default/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./images/'))
}

// Compile into CSS
const compileSass = () => {
  return gulp.src('./default/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

const Babel = () => {
  return gulp.src('./default/babel/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./scripts/'))
}

// Compile into HTML
const compilePug = () => {
  return gulp.src('./default/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

// Browser reload on change
const watch = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./default/scss/**/*.scss', compileSass);
  gulp.watch('./default/images/*', minifyImg);
  gulp.watch('./default/pug/*.pug', compilePug);
  gulp.watch('./default/babel/*.js', Babel);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.minifyImg = minifyImg;
exports.compilePug = compilePug;
exports.watch = watch;