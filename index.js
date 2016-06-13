var elixir  = require('laravel-elixir');
var gulp    = require('gulp');
var inject  = require('gulp-inject');
var jade    = require('gulp-jade');
var plumber = require('gulp-plumber');
var _       = require('underscore');

var Task = elixir.Task;

elixir.extend('inject', function(options){

    options = _.extend({
        baseDir: './',
        dest: 'public/',
        search: '**/*.jade',
        src: 'resources/jade/'
    }, options);

    new Task('inject', function(){
        gulp.src(options.baseDir + options.src + options.search)
            .pipe(plumber())
            .pipe(jade({
              pretty: true
            }))
            .pipe(gulp.dest(options.baseDir + options.dest))
            .pipe(inject(gulp.src(options.baseDir + options.dest + '**/*.css', {read: false}), {relative: true}))
            .pipe(gulp.dest(options.baseDir + options.dest));
    })
    .watch(options.baseDir + options.src + options.search);
});

