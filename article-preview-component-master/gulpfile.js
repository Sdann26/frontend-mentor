const {src, dest, series, parallel, watch} = require("gulp");
const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const browserSync = require("browser-sync");
const rename = require("gulp-rename")
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");

const style = ()=>{
  const plugins = [tailwindcss, autoprefixer]
  return src("./style/main.css")
        .pipe(postcss(
          plugins
        ))
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
    watch("./style/main.css", style);
    watch("./scripts/index.js", js);
    watch("./*.html", style).on("change", browserSync.reload);
}

exports.default = series(parallel(style, js), watchTask);