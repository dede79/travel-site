var gulp = require('gulp'), //bring in gulp
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png =require('gulp-svg2png');

//gulp sprite package requires object literal to define options
var config = {
  shape: {
    spacing: {
      padding: 1 //padding between images in sprite file
    }
  },
  mode: {
    css: {
      variables:{
        replaceSvgWithPng: function(){
          return function(sprite, render){
            return render(sprite).split('.svg').join('.png');
         }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          //create the template folder and sprite.css
          template: './gulp/templates/sprites.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

//create sprite task, beginclean is dependency of createSprite
gulp.task('createSprite',['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config)) //pipe to transform into sprite
    .pipe(gulp.dest('./app/temp/sprite/'));
});

//
gulp.task('createPngCopy',['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

//this task also depends on createSprite
 gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

//copy the sprite.css from temp folder to app styles folder, use rename package to change file to _sprite.css
//copySprite dependes on createSprite to run first.
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

//once all tasks have run, can delete app/temp/sprite folder
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

//group tasks to run only one for all. Named it icons, run in cl as gulp icons.
gulp.task('icons', [ 'beginClean', 'createSprite','createPngCopy', 'copySpriteGraphic', 'copySpriteCSS','endClean']); 