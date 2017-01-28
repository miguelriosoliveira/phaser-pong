const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

// Static server
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch("dist/*.html").on("change", browserSync.reload);
	gulp.watch("dist/js/*.js").on("change", browserSync.reload);
});

gulp.task('babel', () => {
	return gulp.src('js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
	return gulp.src('*.html')
			.pipe(gulp.dest('dist/')) &&
		gulp.src('js/libs/*.js')
			.pipe(gulp.dest('dist/js/libs'));
});

gulp.task('default', ['browser-sync', 'babel', 'copy'], function () {
	gulp.watch("html/*.html", ['copy']);
	gulp.watch("js/*.js", ['babel']);
});