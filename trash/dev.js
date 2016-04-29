var gulp 		= require('gulp');
var reactify	= require('reactify');
var browserify 	= require('browserify');
var source		= require('vinyl-source-stream');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var exec        = require('child_process').exec;

gulp.task('default', ['html', 'sass', 'js', 'assets' ]);

/*************************************************************************************/

gulp.task('js', function () {
	browserify(['./src/front/index.js'])
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'))
});

gulp.task('html', function () {
    gulp.src('./src/front/index.html')
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
    var files = [
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        './src/front/sass/style.scss'
    ];
    gulp.src(files)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('assets', function () {
    gulp.src('./src/front/images/**/*.*')
        .pipe(gulp.dest('./dist/images'))

    gulp.src('./src/front/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'))
});
