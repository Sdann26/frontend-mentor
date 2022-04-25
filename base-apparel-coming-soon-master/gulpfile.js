const { src, dest, series, parallel, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");

const style = () => {
  return src("./style/main.css")
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(rename("style.css"))
    .pipe(dest("./style/"))
    .pipe(browserSync.stream());
};

const js = () => {
  return src("./scripts/index.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(rename("main.js"))
    .pipe(dest("./scripts/"))
    .pipe(browserSync.stream());
};

const watchTask = () => {
  browserSync.init({
    server: "./",
  });
  watch("./style/main.css", style);
  watch("./scripts/index.js", js);
  watch("./*.html").on("change", browserSync.reload);
};

exports.default = series(parallel(style, js), watchTask);
