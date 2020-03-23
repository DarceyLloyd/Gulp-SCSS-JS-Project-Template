const gulp = require("gulp");
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require("gulp-rename");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// 3. Vendor & 1 x JS File minified per a script

let vendorFiles = [
    "./node_modules/aftc.js/dist/aftc.min.js",
];




let buildVendor = function (done) {
    gulp.src(vendorFiles)
        .pipe(concat('vendor.min.js'))
        .pipe(terser())
        // .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/includes/js/'));
    done();
};


let buildJsDev = function (done) {
    gulp.src("./src/**/*.js")
        // .pipe(concat('app.js'))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/includes/js/'))

    done();
};



let buildJsProd = function (done) {
    gulp.src("./src/**/*.js")
        // .pipe(concat('app.min.js'))
        .pipe(terser())
        // .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(rename({
            // basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/includes/js/'));
    done();
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task("buildJs", gulp.parallel(buildVendor, buildJsDev, buildJsProd));

gulp.task("watchJs", function () {
    gulp.watch("./src/**/*.js", gulp.parallel(buildVendor, buildJsDev, buildJsProd));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports = {

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -