//all watch tasks here:
//packages vars:

var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); //for browsersync only require the method create

//set up gulp to watch the files
gulp.task('watch', function(){
	
	browserSync.init({
		server: {
			baseDir: "app"
		}
	});
	
watch('./app/index.html', function(){// takes 2 args: file on computer to watch, second anon function to run the task
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});//** to go to any future folders, * any css file any name
});

//styles task is a dependency of cssInject task
gulp.task('cssInject', ['styles'], function() {
		return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});