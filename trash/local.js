var gulp 		= require('gulp');
var reactify	= require('reactify');
var browserify 	= require('browserify');
var source		= require('vinyl-source-stream');
var gls         = require('gulp-live-server');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var exec        = require('child_process').exec;

gulp.task('default', ['mongo', 'server', 'html', 'sass', 'js', 'assets', 'watch' ]);

/*************************************************************************************/

gulp.task('mongo', function () {
    exec('mongo admin --eval "db.shutdownServer()"', function () {
        var mongo = exec('mongod --dbpath ./db/local/');
        mongo.stdout.on('data', function (data) {
            if (data.indexOf('waiting for connections on port') !== -1) {
            }
            if (data.indexOf('dbexit') !== -1) {
                console.error('Unable to start mongo!');
            }
        });
    });
});

var server;

gulp.task('server', function () {
    server = gls.new('src/back/server.js');
    server.start().then(function (result) {
        if (result && result.code === 1) {
            // killLiveReloadServerIfRunning();
            console.error("Unable start server.");
        }
    });
});

gulp.task('js', function () {
    // browserify(files, { debug: true })
	browserify(['./gulp/index-debugging.js'])
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'))
        .pipe(server.notify());
});

gulp.task('html', function () {
    gulp.src('./src/front/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(server.notify());
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
        .pipe(server.notify());
});

gulp.task('assets', function () {
    gulp.src('./src/front/images/**/*.*')
        .pipe(gulp.dest('./dist/images'))
        .pipe(server.notify());

    gulp.src('./src/front/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(server.notify());
});

gulp.task('watch', function () {
    gulp.watch('./src/front/index.html', [ 'html' ]);
    gulp.watch('./src/front/**/*.js', [ 'js' ]);
    gulp.watch('./src/front/**/*.{sass,scss}', [ 'sass' ]);
    gulp.watch([
        './src/front/images/**/*.*',
        './src/front/fonts/**/*.*'
    ], [ 'assets' ]);
});


