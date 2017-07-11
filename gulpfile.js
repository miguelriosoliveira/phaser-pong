const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const babel = require("gulp-babel");

// Static server
gulp.task("browser-sync", function () {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch("dist/*.html").on("change", browserSync.reload);
	gulp.watch("dist/js/*.js").on("change", browserSync.reload);
});

gulp.task("babel", function () {
    return gulp.src("js/*.js")
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("dist/js"));
});

gulp.task("html", function () {
    return gulp.src("index.html").pipe(gulp.dest("dist/"));
});

gulp.task("assets", function () {
    return gulp.src("assets/*").pipe(gulp.dest("dist/assets/"));
});

gulp.task("libs", function () {
    return gulp.src("js/libs/**/*.js").pipe(gulp.dest("dist/js/libs/"));
});

gulp.task("default", ["browser-sync", "babel", "html", "libs", "assets"], function () {
    gulp.watch("js/libs/*", ["libs"]);
    gulp.watch("assets/*", ["assets"]);
    gulp.watch("index.html", ["html"]);
    gulp.watch("js/*.js", ["babel"]);
});