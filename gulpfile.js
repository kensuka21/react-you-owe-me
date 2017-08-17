/**
 * Created by kmukai on 8/15/2017.
 */

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config = {
    port: 3000,
    paths: {
        mainJs: './src/main.js',
        js: './src/**/*.js',
        html: './src/*.html',
        dist: './dist',
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ]
    }
};

gulp.task('js', function(){
    gulp.src(config.paths.mainJs)
        .pipe(browserify({
            transform: ['reactify'],
        }))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.js, ['css']);
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('connect', function () {
    connect.server({
        root: config.paths.dist,
        port: config.port,
        livereload: true
    });
});

gulp.task('default', ['html', 'js', 'css', 'watch', 'connect']);
