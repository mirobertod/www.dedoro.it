var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('css', function(done) {
    gulp.src('./src/fullpage.css')
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('./assets/css'))
        .pipe(minifyCss({
            compatibility: 'ie8',
            advanced: false,
            keepSpecialComments: '1'
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css'));
    done();
});

gulp.task('default', gulp.parallel('css'));