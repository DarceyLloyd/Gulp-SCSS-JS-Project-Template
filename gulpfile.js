const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SASS/SCSS > CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const buildCssDev = function(done) {
    return gulp
        .src("./scss/*.scss")
        .pipe(sass({
            outputStyle: "expanded", // compressed, nested, compact, and expanded
        }))
        .on("error", sass.logError)
        .pipe(gulp.dest("./dist/includes/css/"));
    // done();
}
// exports.buildCssDev = buildCssDev;
gulp.task("buildCssDev", gulp.series(buildCssDev));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


const buildCssProd = function(done) {
    return gulp
        .src("./scss/*.scss")
        .pipe(sass({
            outputStyle: "compressed", // compressed, nested, compact, and expanded
        }))
        .on("error", sass.logError)
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./dist/includes/css/"));
    // done();
}
// exports.buildCssProd = buildCssProd;



gulp.task("buildCss", gulp.parallel(buildCssDev,buildCssProd));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



gulp.task("watchCss", function(){
    gulp.watch([
        "./scss/**/*.scss"
    ], gulp.parallel(buildCssDev,buildCssProd));
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








// JS
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
JSMode Options:
1. 1 File to contain them all.. Vendor and all custom script into a single file.
2. 2 Files: Vendor & All project files concatinated into a single file
3. Vendor & 1 x JS File minified per a script
    JS-1: vendor.min.js
    JS-2: page-1.js && page-1.min.js
    etc...

Depending on JSMode chosen edit the appropriate file:
    JSMode: 1 - Edit file "gulpfile-js1.js"
    JSMode: 2 - Edit file "gulpfile-js2.js"
    JSMode: 3 - Edit file "gulpfile-js3.js"
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const JSMode = 3; // 1, 2 or 3

const js = require("./gulpfile-js"+JSMode+".js");
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -