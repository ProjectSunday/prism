var gulp 		= require('gulp');
var browserify 	= require('browserify');
var reactify	= require('reactify');
var source		= require('vinyl-source-stream');

gulp.task('default', ['html', 'js']);

gulp.task('html', function () {
	gulp.src('./src/front/index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
	browserify('./src/front/index.js')
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
});