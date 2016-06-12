# laravel-elixir-inject

This is a wrapper of gulp-inject package for laravel elixir
- It compiles all jade files in resources/jade folder to public folder then inject all css file to the compiled html file.

# Usage

var elixir = require('laravel-elixir');
require('laravel-elixir-inject');

elixir(function(mix){
    mix.inject();
});

- Options
    - baseDir: './'
    - dest: 'public/'
    - search: '**/*.jade'
    - src: 'resources/jade/'
