var gulp      = require('gulp');
var cleanCSS  = require('gulp-clean-css');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var concat = require('gulp-concat');

/* --- Minify CSS --- */
gulp.task('css', function () {
    return gulp.src('assets/app.css')
        .pipe(cleanCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('./assets/'));
});

/* --- Combine & Minify JS --- */
gulp.task('js', function () {
    return gulp.src([
        'assets/app.js',
        'assets/bulk-vin-generator.js',
        'assets/vin-decoder.js',
        'assets/vin-validator.js',
        'assets/vin-qr-generator.js',
        'assets/vin-visualizer.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./assets/'));
});

/* --- Default Task --- */
gulp.task('default', gulp.parallel('css', 'js'));