var gulp      = require('gulp');
var cleanCSS  = require('gulp-clean-css');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var concat = require('gulp-concat');
var fs = require('fs');
var crypto = require('crypto');

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
        'assets/vin-barcode-generator.js',
        'assets/vin-visualizer.js',
        'assets/search.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('./assets/'));
});

/* --- Write content-hash versions for cache-busting --- */
gulp.task('version', function (done) {
    function hash(path) {
        return crypto.createHash('md5').update(fs.readFileSync(path)).digest('hex').slice(0, 10);
    }
    var css = hash('./assets/app.min.css');
    var js = hash('./assets/app.min.js');
    if (!fs.existsSync('./_data')) fs.mkdirSync('./_data');
    fs.writeFileSync('./_data/assets.yml', 'css: "' + css + '"\njs: "' + js + '"\n');
    done();
});

/* --- Default Task --- */
gulp.task('default', gulp.series(gulp.parallel('css', 'js'), 'version'));