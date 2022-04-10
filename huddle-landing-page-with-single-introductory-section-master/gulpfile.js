const { src, dest, series, watch } = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");

const style = () => {
  const plugins = [tailwindcss, autoprefixer];
  return src("./style/main.css")
    .pipe(postcss(plugins))
    .pipe(rename("style.css"))
    .pipe(dest("./style/"))
    .pipe(browserSync.stream());
};

const watchTask = () => {
  browserSync.init({
    server: "./",
  });
  watch("./style/main.css", style);
  watch("./*.html", style).on("change", browserSync.reload);
};

exports.default = series(style, watchTask);
