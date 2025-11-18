var gulp      = require('gulp');
var cleanCSS  = require('gulp-clean-css');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var concat = require('gulp-concat');

/* --- Minify CSS --- */
gulp.task('css', function () {
    return gulp.src('app.css')
        .pipe(cleanCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./'));
});

/* --- Combine & Minify JS --- */
gulp.task('js', function () {
    return gulp.src([
        'app.js',
        'bulk-vin-generator.js',
        'vin-decoder.js',
        'vin-validator.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./'));
});

/* --- Default Task --- */
gulp.task('default', gulp.parallel('css', 'js'));