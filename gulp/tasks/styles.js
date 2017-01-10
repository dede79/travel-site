//all the css tasks here

var gulp = require('gulp');

var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');

var cssvars = require('postcss-simple-vars');

var nested = require('postcss-nested');

var cssImport = require('postcss-import');

var mixins = require('postcss-mixins');

var hexrgba = require('postcss-hexrgba');

//set up css
gulp.task('styles', function(){
	//use pipe to choose destination from src to dest where new css file will be created
	//add return keyword as gulp.src is async function
	//also add an error checker before the des pipe for error handling in gulp
	return gulp.src('./app/assets/styles/styles.css').pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer])).on('error',function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	}).pipe(gulp.dest('./app/temp/styles'));
}); 