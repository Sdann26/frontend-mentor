const { src, dest } = require("gulp");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

const style = () => {
  return src("./css/main.css")
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(rename("style.css"))
    .pipe(dest("./css"));
};

exports.default = style;
