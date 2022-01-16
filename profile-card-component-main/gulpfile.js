const {src, dest, series, watch} = require("gulp");
const rename = require("gulp-rename")
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");


const style = ()=>{
    return src("./scss/main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
        }))
        .pipe(rename('style.css'))
        .pipe(dest("./"))
        .pipe(browserSync.stream());
}

const watchTask = ()=>{
    browserSync.init({
        server: "./"
    });
    watch("./scss/*.scss", style);
    watch("./*.html").on("change", browserSync.reload);
}

exports.default = series(style, watchTask);
