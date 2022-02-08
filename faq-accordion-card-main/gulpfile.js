const {src, dest, series, parallel, watch} = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require("browser-sync");
const rename = require("gulp-rename")
const sass = require("gulp-sass")(require('sass'));

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

const js = ()=>{
    return src("./scripts/index.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename('main.js'))
        .pipe(dest("./scripts/"))
        .pipe(browserSync.stream());
}

const watchTask = ()=>{
    browserSync.init({
        server: "./"
    });
    watch("./style/*.scss", style);
    watch("./scripts/index.js", js);
    watch("./*.html").on("change", browserSync.reload);
}

exports.default = series(parallel(style, js), watchTask);
