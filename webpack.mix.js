let mix = require('laravel-mix');

mix.js('src/app.js/app.js', 'assets')
   .sass('src/app.scss/app.scss', 'assets');