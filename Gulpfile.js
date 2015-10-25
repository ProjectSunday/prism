var gulp 		= require('gulp');
var browserify 	= require('gulp-browserify');

gulp.task('default', ['html']);

gulp.task('html', function () {
	gulp.src('./src/front/index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function () {
	gulp.src('./src/front/**/*.js')
		.pipe(browserify())
		.pipe(gulp.dest('./dist'))
});