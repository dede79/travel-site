var gulp = require('gulp');

var watch = require('gulp-watch');

// add packages:
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

var cssvars = require('postcss-simple-vars');

var nested = require('postcss-nested');

var cssImport = require('postcss-import');

var browserSync = require('browser-sync').create(); //for browsersync only require the method create

gulp.task('default', function(){
	console.log("Horay you created a gulp task");
});

gulp.task('html', function(){
	console.log("Imagine something useful here with HTML");
});

//set up css
gulp.task('styles', function(){
	//use pipe to choose destination from src to dest where new css file will be created
	//add return keyword as gulp.src is async function
	return gulp.src('./app/assets/styles/styles.css').pipe(postcss([cssImport, nested, cssvars, autoprefixer])).pipe(gulp.dest('./app/temp/styles'));
});

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