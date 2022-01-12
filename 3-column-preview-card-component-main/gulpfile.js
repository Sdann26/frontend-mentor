const {src, dest, series, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const browserSync = require("browser-sync");

const style = ()=>{
    return src("./*.scss")
        .pipe(sass())
        .pipe(dest("./"))
        .pipe(browserSync.stream());
}

const watchTask = ()=>{
    browserSync.init({
        server: "./"
    });
    watch("./*.scss", style);
    watch("./*.html").on("change", browserSync.reload);
}

exports.default = series(style, watchTask);