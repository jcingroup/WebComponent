/// <vs SolutionOpened='default' />
var gulp = require('gulp');
var react = require('gulp-react');
//====================================================//
gulp.task('Compiler', function () {
    var jsfiles = [
        'Main.jsx'
    ];
    return gulp.src(jsfiles)
        .pipe(react())
        .pipe(gulp.dest('build/'));;
});

gulp.task('default', function () {
    gulp.watch('*.jsx', function () {
        gulp.run('Compiler');
    });
});