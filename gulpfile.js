var gulp = require('gulp'),
    concat = require('gulp-concat');

var jsPath = './8demoBootstrap/**/*.js';

gulp.task('js-concat', function () {
    gulp.src(jsPath)
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./8demoBootstrap/dist'));
});

gulp.task('watch', function () {
    gulp.watch(jsPath, ['js-concat']);
});

gulp.task('default', ['js-concat', 'watch']);