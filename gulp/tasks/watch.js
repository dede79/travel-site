//all watch tasks here:
//packages vars:

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); //for browsersync only require the function create

//set up gulp to watch the files
gulp.task('watch', function(){
	
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	
//gulp to watch:
watch('./app/index.html', function(){// takes 2 args: file on computer to watch, second anon function to run the task
		browserSync.reload();
	});
	
watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});//** to go to any future folders, * any css file any name
});

watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh'); //task created below
});

//styles task is a dependency of cssInject task, pipe stylesheet to browsersync
gulp.task('cssInject', ['styles'], function() {
		return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});

//browserSync to sync scripts file,depends on scripts task first
gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});

