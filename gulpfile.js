const gulp        = require('gulp');
const sass        = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

// Compile SCSS files
// gulp.task('sass', function () {
// return gulp.src('./default/scss/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'))
//     .pipe(browserSync.stream());
// });

// gulp.task('watch', function () {
//   gulp.watch('./default/scss/**/*.scss', gulp.series('sass'));
//   gulp.watch('./*.html').on('change', browserSync.reload);
// });


// Compile into CSS
function compileSass() {
  return gulp.src('./default/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
 }

// function watch() {
browserSync.init({
  server: {
    baseDir: './'
  }
});

gulp.watch('./default/scss/main.scss', compileSass);
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.compileSass = compileSass;
exports.watch = watch;

// \\192.168.0.159\EPSON L365 GINGER