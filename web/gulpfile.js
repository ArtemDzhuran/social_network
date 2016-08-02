//npm gulp-packages
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    elixir = require('laravel-elixir');

//gulp custom helpers
    CleanHelper = require('./src/gulp_helpers/clean-helper'),
    CompileStylesHelper = require('./src/gulp_helpers/compile-styles-helper');

gulp.task('clean', function () {
    var helper = new CleanHelper();

    return gulp.src(helper.buildSources(), {read: false})
        .pipe(clean());
});

gulp.task('compile-styles', ['clean'], function () {
    var helper = new CompileStylesHelper({
        sass: {
            excludeDirectories: ['globals', 'partials', 'utils'],
            excludeFiles: ['customization/sign_in_sign_up/common.sass']
}
    });

    return gulp.src(helper.buildSources('sass'))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
});

gulp.task('deploy', ['compile-styles']);

gulp.task('default', ['deploy'], function () {
    gulp.watch('src/**', ['deploy']);
});


elixir(function(mix) {
    mix.copy('node_modules', 'public/js/node_modules');
});
