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
	gulp.src('assets/*').pipe(gulp.dest('dist/assets/'));
	return gulp.src('*.html').pipe(gulp.dest('dist/'));
});

gulp.task('default', ['browser-sync', 'babel', 'copy'], function () {
	gulp.watch("html/*.html", ['copy']);
	gulp.watch("js/*.js", ['babel']);
});