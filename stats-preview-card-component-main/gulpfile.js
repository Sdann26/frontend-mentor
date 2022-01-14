const {src, dest} = require("gulp");
const autoprefixer = require('gulp-autoprefixer');

const style = ()=>{
    return src("./css/style.css")
        .pipe(autoprefixer({
            cascade: true,
        }))
        .pipe(dest("./css"));
}

exports.default = style;