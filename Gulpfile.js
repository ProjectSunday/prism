var gulp 		= require('gulp');
var connect		= require('gulp-connect');
var browserify 	= require('browserify');
var reactify	= require('reactify');
var source		= require('vinyl-source-stream');

gulp.task('default', ['html', 'js', 'connect', 'watch']);

gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: 3000,
		base: 'http://localhost',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('./src/front/index.html')
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	browserify('./src/front/index.js')
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('./src/front/index.html', [ 'html' ]);
	gulp.watch('./src/front/**/*.js', [ 'js' ]);
});