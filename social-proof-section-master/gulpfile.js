const {src, dest, series, watch} = require("gulp");
const rename = require("gulp-rename")
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync");


const style = ()=>{
    return src("./style/main.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: true,
        }))
        .pipe(rename('style.css'))
        .pipe(dest("./style/"))
        .pipe(browserSync.stream());
}

const watchTask = ()=>{
    browserSync.init({
        server: "./"
    });
    watch("./style/*.scss", style);
    watch("./*.html").on("change", browserSync.reload);
}

exports.default = series(style, watchTask);
