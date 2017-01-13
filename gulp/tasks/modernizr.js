var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

//set modernizr task -to test browser for modern features e.g flexbox
gulp.task('modernizr', function(){
  return gulp.src(['./app/assets/styles/**/*.css','./app/assets/scripts/**/*.js']).pipe(modernizr({
    "options": [ 
      "setClasses"
    ]
  })).pipe(gulp.dest('./app/temp/scripts'));
});