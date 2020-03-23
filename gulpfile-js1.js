const gulp = require("gulp");
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require("gulp-rename");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// 1 JS File to contain them all


let files = [
    "./node_modules/aftc.js/dist/aftc.min.js",
    "./src/app.js",
    "./src/pagename.js",
];


let buildJsDev = function (done) {
    gulp.src(files)
        .pipe(concat('app.js'))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/includes/js/'))

    done();
};



let buildJsProd = function (done) {
    gulp.src(files)
        .pipe(concat('app.min.js'))
        .pipe(terser())
        // .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/includes/js/'));
    done();
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task("buildJs", gulp.parallel(buildJsDev, buildJsProd));

gulp.task("watchJs", function(){
    gulp.watch(files, gulp.parallel(buildJsDev, buildJsProd));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = {
    files
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -